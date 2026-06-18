export async function onRequestPost(context) {
  const formData = await context.request.formData();

  const name = formData.get("name") || "No name provided";
  const email = formData.get("email") || "No email provided";
  const interest = formData.get("interest") || "No interest selected";
  const message = formData.get("message") || "No message provided";

  const body = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Area of Interest: ${interest}

Message:
${message}
  `.trim();

  // Send via Microsoft 365 SMTP using the built-in fetch to a relay service
  // For now, we’ll just log it so you can see it working
  console.log(body);

  // TODO: replace this with real SMTP sending once credentials/relay are wired
  return Response.redirect("/thankyou.html", 302);
}
