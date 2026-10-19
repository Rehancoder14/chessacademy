import nodemailer from "nodemailer";

const recipient = "aniketbapat108@gmail.com";
const allowedLevels = [
  "",
  "Beginner",
  "Knows basic moves",
  "Tournament player",
];

type Enquiry = {
  parentName: string;
  phone: string;
  studentName: string;
  level: string;
  message: string;
};

function readEnquiry(value: unknown): Enquiry | null {
  if (typeof value !== "object" || value === null) {
    return null;
  }

  const data = value as Record<string, unknown>;
  const parentName = data["parent-name"];
  const phone = data.phone;
  const studentName = data["student-name"] ?? "";
  const level = data.level ?? "";
  const message = data.message ?? "";

  if (
    typeof parentName !== "string" ||
    typeof phone !== "string" ||
    typeof studentName !== "string" ||
    typeof level !== "string" ||
    typeof message !== "string"
  ) {
    return null;
  }

  const enquiry = {
    parentName: parentName.trim(),
    phone: phone.trim(),
    studentName: studentName.trim(),
    level: level.trim(),
    message: message.trim(),
  };

  if (
    !enquiry.parentName ||
    enquiry.parentName.length > 100 ||
    !/^[+()0-9 -]{7,30}$/.test(enquiry.phone) ||
    enquiry.studentName.length > 100 ||
    !allowedLevels.includes(enquiry.level) ||
    enquiry.message.length > 2000
  ) {
    return null;
  }

  return enquiry;
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 10_000) {
    return Response.json({ error: "Enquiry is too large." }, { status: 413 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const enquiry = readEnquiry(body);
  if (!enquiry) {
    return Response.json(
      { error: "Please provide valid enquiry details." },
      { status: 400 },
    );
  }

  const emailFrom = process.env.EMAIL_FROM;
  const emailPassword = process.env.EMAIL_PASSWORD;
  if (!emailFrom || !emailPassword) {
    console.error("Enquiry email is not configured: EMAIL_FROM or EMAIL_PASSWORD is missing.");
    return Response.json(
      { error: "The enquiry service is not configured." },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailFrom,
      pass: emailPassword,
    },
  });

  try {
    await transporter.sendMail({
      from: emailFrom,
      to: recipient,
      subject: "New Kingslayer Chess Academy enquiry",
      text: [
        "A new admission enquiry was submitted.",
        "",
        `Parent name: ${enquiry.parentName}`,
        `Phone number: ${enquiry.phone}`,
        `Student name: ${enquiry.studentName || "Not provided"}`,
        `Chess level: ${enquiry.level || "Not provided"}`,
        `Message: ${enquiry.message || "Not provided"}`,
      ].join("\n"),
    });
  } catch (error) {
    console.error(
      "Failed to send enquiry email.",
      error instanceof Error ? error.message : "Unknown email error",
    );
    return Response.json(
      { error: "Unable to send the enquiry right now." },
      { status: 502 },
    );
  }

  return Response.json({ success: true });
}
