"use client";

import { type FormEvent, useState } from "react";

type SubmissionState = "idle" | "sending" | "sent" | "error";

export default function EnquiryForm() {
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmissionState("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const enquiry = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(enquiry),
      });

      if (!response.ok) {
        let message =
          "We could not send your enquiry. Please try again or call the academy.";

        if (response.status === 404) {
          message =
            "The enquiry service is not available yet. Please call the academy.";
        } else if (
          response.headers.get("content-type")?.includes("application/json")
        ) {
          const result: unknown = await response.json();
          if (
            typeof result === "object" &&
            result !== null &&
            "error" in result &&
            typeof result.error === "string"
          ) {
            message = result.error;
          }
        }

        setErrorMessage(message);
        setSubmissionState("error");
        return;
      }

      form.reset();
      setErrorMessage("");
      setSubmissionState("sent");
    } catch {
      setErrorMessage(
        "We could not reach the enquiry service. Please try again or call the academy.",
      );
      setSubmissionState("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 bg-[#faf8f2] p-6 text-black shadow-[14px_14px_0_rgba(251,191,36,.25)]"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold">
          Parent name
          <input
            name="parent-name"
            type="text"
            placeholder="Your name"
            autoComplete="name"
            maxLength={100}
            required
            className="h-12 border border-black/20 px-4 font-normal outline-none focus:border-black"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold">
          Phone number
          <input
            name="phone"
            type="tel"
            placeholder="Mobile number"
            autoComplete="tel"
            maxLength={30}
            required
            className="h-12 border border-black/20 px-4 font-normal outline-none focus:border-black"
          />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold">
          Student name
          <input
            name="student-name"
            type="text"
            placeholder="Child's name"
            maxLength={100}
            className="h-12 border border-black/20 px-4 font-normal outline-none focus:border-black"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold">
          Chess level
          <select
            name="level"
            className="h-12 border border-black/20 px-4 font-normal outline-none focus:border-black"
            defaultValue=""
          >
            <option value="">Select level</option>
            <option>Beginner</option>
            <option>Knows basic moves</option>
            <option>Tournament player</option>
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-bold">
        Message
        <textarea
          name="message"
          placeholder="Tell us preferred timing or questions"
          rows={5}
          maxLength={2000}
          className="border border-black/20 px-4 py-3 font-normal outline-none focus:border-black"
        />
      </label>
      <button
        type="submit"
        disabled={submissionState === "sending"}
        className="h-13 bg-black px-6 py-4 text-base font-bold text-white transition hover:bg-zinc-800 disabled:cursor-wait disabled:opacity-60"
      >
        {submissionState === "sending" ? "Sending..." : "Send enquiry"}
      </button>
      <p
        role={submissionState === "error" ? "alert" : "status"}
        aria-live="polite"
        className="text-sm font-semibold"
      >
        {submissionState === "sent" &&
          "Thank you. Your enquiry has been sent to the academy."}
        {submissionState === "error" && errorMessage}
      </p>
    </form>
  );
}
