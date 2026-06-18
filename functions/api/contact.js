export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Handle contact form POST
    if (url.pathname === "/api/contact" && request.method === "POST") {
      const formData = await request.formData();

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

      // For now, just log it so we know it's working
      console.log(body);

      // Redirect to thank-you page (served from your static assets)
      return Response.redirect("/thankyou.html", 302);
    }

    // For everything else, serve your static site
    return env.ASSETS.fetch(request);
  }
}
