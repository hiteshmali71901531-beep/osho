"use server";

import { redirect } from "next/navigation";

/**
 * Form endpoints for the newsletter and seller-application forms.
 *
 * TODO(owsho): wire these to the real CRM / mailing provider. Both actions
 * currently validate the payload and log it server-side, then redirect to the
 * static confirmation page. Because they redirect rather than return state,
 * the forms work with JavaScript disabled and the pages stay fully static.
 */

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function subscribeToNewsletter(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();

  if (!EMAIL.test(email)) {
    redirect("/thank-you?status=invalid");
  }

  console.info("[owsho] newsletter signup", { email });
  redirect("/thank-you?status=subscribed");
}

export async function submitSellerApplication(formData: FormData) {
  const application = {
    shopName: String(formData.get("shopName") ?? "").trim(),
    ownerName: String(formData.get("ownerName") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    city: String(formData.get("city") ?? "").trim(),
    pincode: String(formData.get("pincode") ?? "").trim(),
    category: String(formData.get("category") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  const missing =
    !application.shopName ||
    !application.ownerName ||
    !EMAIL.test(application.email) ||
    application.phone.replace(/\D/g, "").length < 10 ||
    !application.city ||
    !/^\d{6}$/.test(application.pincode);

  if (missing) {
    redirect("/thank-you?status=invalid");
  }

  console.info("[owsho] seller application", application);
  redirect("/thank-you?status=applied");
}
