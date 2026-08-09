"use server";

import { redirect } from "next/navigation";

/**
 * Endpoint for the seller onboarding form.
 *
 * TODO(owsho): wire this to the real CRM / seller onboarding queue. It
 * currently validates the payload and logs it server-side, then redirects to
 * the static confirmation page. Because it redirects rather than returning
 * state, the form works with JavaScript disabled and the page stays static.
 */

/** Mirrors the approved "Become an Owsho Seller" form. */
export async function submitSellerApplication(formData: FormData) {
  const application = {
    fullName: String(formData.get("fullName") ?? "").trim(),
    businessName: String(formData.get("businessName") ?? "").trim(),
    mobile: String(formData.get("mobile") ?? "").trim(),
    category: String(formData.get("category") ?? "").trim(),
    city: String(formData.get("city") ?? "").trim(),
    storeAddress: String(formData.get("storeAddress") ?? "").trim(),
    interest: String(formData.get("interest") ?? "").trim(),
  };

  const invalid =
    !application.fullName ||
    !application.businessName ||
    application.mobile.replace(/\D/g, "").length < 10 ||
    !application.category ||
    !application.city ||
    !application.storeAddress ||
    !application.interest;

  if (invalid) {
    redirect("/thank-you?status=invalid");
  }

  console.info("[owsho] seller application", application);
  redirect("/thank-you?status=applied");
}
