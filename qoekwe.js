export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Contact form handler
    if (url.pathname === "/api/contact" && request.method === "POST") {
      const formData = await request.formData();

      const name = formData.get("name") || "No name provided";
      const email = formData.get("email") || "No email provided";
      const interest = formData.get("interest") || "No interest selected";
      const message = formData.get("message") || "No message provided";

      console.log(`
New Contact Form Submission

Name: ${name}
Email: ${email}
Area of Interest: ${interest}

Message:
${message}
      `);

      return Response.redirect("/thankyou.html", 302);
    }

    // Serve static site files
    return env.ASSETS.fetch(request);
  }
}
