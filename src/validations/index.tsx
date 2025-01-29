import * as yup from "yup";

export const signinFormValidation = yup.object().shape({
  fullName: yup
    .string()
    .matches(/^[a-zA-Z ]+$/, "Name should only contain letters")
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  number: yup
    .string()
    .matches(/^\d+$/, "Number should only contain digits")
    .min(10, "Number must be at least 10 digits")
    .max(15, "Number must be at most 15 digits")
    .required("Number is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email Address is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
});
export const forgotemailFormValidation = yup.object().shape({
  email: yup.string().email("invalid_email").required("req_email"),
});
export const renewpasswordFormValidation = yup.object().shape({
  oldPassword: yup.string().required("req_old_pass"), // Validation for old password
  password: yup.string().required("req_pass").min(8, "weak_pass"),
  confirmPassword: yup
    .string()
    .required("req_pass")
    .oneOf([yup.ref("password")], "miss_match_pass"),
});
export const updatepasswordFormValidation = yup.object().shape({
  password: yup.string().required("req_pass").min(8, "weak_pass"),
  confirmPassword: yup
    .string()
    .required("req_pass")
    .oneOf([yup.ref("password")], "miss_match_pass"),
});
export const signupFormValidation = yup.object().shape({
  email: yup.string().email("invalid_email").required("req_email"),
  first_name: yup.string().required("req_name"),
  last_name: yup.string().required("req_name"),
  password: yup.string().required("req_pass").min(8, "weak_pass"),
});
export const updateProfileFormValidation = yup.object().shape({
  name: yup.string().required("req_name"),
  // last_name: yup.string().required('req_first_name'),
  email: yup.string().email("invalid_email").required("req_email"),
  phone: yup
    .number()
    .typeError("invalid_phone")
    .positive("invalid_phone")
    .integer("invalid_phone")
    .min(8, "invalid_phone")
    .required("phone_required"),

  doc_cat_id: yup.string().required("req_cat"),
  zip_code: yup.string().required("req_zip_code"),
  city: yup.string().required("req_city"),
  state: yup.string().required("req_state"),
  price: yup.string().required("req_price"),
  experience: yup.string().required("req_experience"),
});
export const addressFormValidation = yup.object().shape({
  title: yup.string().required("req_name"),
  phone: yup
    .number()
    .typeError("invalid_phone")
    .positive("invalid_phone")
    .integer("invalid_phone")
    .min(8, "invalid_phone")
    .required("phone_required"),
  zipCode: yup.string().required("req_zip_code"),
  city: yup.string().required("req_city"),
  address: yup.string().required("address_required"),
});

export const updatePasswordValidation = yup.object().shape({
  email: yup.string().email("invalid_email").required("req_email"),
  old_password: yup.string().required("req_pass").min(8, "weak_pass"),
  new_password: yup
    .string()
    .required("new_password_required")
    .min(8, "weak_pass"),
});
export const addHotelValidation = yup.object().shape({
  title: yup.string().required("title_required"),
  content: yup.string().required("content_required"),
  star_rate: yup.string().required("hotel_rating_required"),
  video: yup.string().required("link_required").url("invalid_link"),
  policy: yup.array().of(
    yup.object().shape({
      title: yup.string().required("policy_title"),
      content: yup.string().required("policy_content"),
    })
  ),
  banner_image_id: yup
    .object()
    .shape({
      url: yup.string().required("select_image"),
    })
    .required("select_image"),
  gallery: yup
    .array()
    .of(
      yup.object().shape({
        url: yup.string().required("select_image"),
      })
    )
    .required("select_image"),
  image_id: yup
    .object()
    .shape({
      url: yup.string().required("select_image"),
    })
    .required("select_image"),
});
export const addRoomValidation = yup.object().shape({
  title: yup.string().required("title_required"),
  // content: yup.string().required('content_required'),
  number: yup.string().required("number_required"),
  price: yup.string().required("price_required"),
  beds: yup.string().required("beds_required"),
  size: yup.string().required("size_required"),
  adults: yup.string().required("adults_required"),
  ican_import_url: yup.string().required("link_required").url("invalid_link"),
  gallery: yup
    .array()
    .of(
      yup.object().shape({
        url: yup.string().required("select_image"),
      })
    )
    .required("select_image"),
  image_id: yup
    .object()
    .shape({
      url: yup.string().required("select_image"),
    })
    .required("select_image"),
});

export const addPriceHotelValidation = yup.object().shape({
  email: yup.string().email("invalid_email").required("req_email"),
  old_password: yup.string().required("req_pass").min(8, "weak_pass"),
  new_password: yup
    .string()
    .required("New Password is required")
    .min(8, "New weak_pass"),
});
