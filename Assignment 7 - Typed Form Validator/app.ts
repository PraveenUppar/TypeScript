// Assignment 7: Typed Form Validator
// ==================================
//
// Build a form validator with TypeScript.
//
// Required fields:
// - name
// - email
// - password
// - confirmPassword
//
// Requirements:
// 1. Create SignupFormData type
// 2. Create ValidationError type
// 3. Create validateName()
// 4. Create validateEmail()
// 5. Create validatePassword()
// 6. Create validateSignupForm(data)
// 7. Return typed validation result
// 8. Connect it to a browser form

// 1. SignupFormData Type
export interface SignupFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// 2. ValidationError Type
export type ValidationError = {
  [K in keyof SignupFormData]?: string;
};

// Typed structure for the overall result
export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError;
}

// 3. validateName()
export function validateName(name: string): string | null {
  const trimmed = name.trim();
  if (!trimmed) {
    return "Name is required.";
  }
  if (trimmed.length < 2) {
    return "Name must be at least 2 characters long.";
  }
  return null;
}

// 4. validateEmail()
export function validateEmail(email: string): string | null {
  const trimmed = email.trim();
  if (!trimmed) {
    return "Email is required.";
  }
  // Standard RFC 5322 compliant simple email regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(trimmed)) {
    return "Please enter a valid email address.";
  }
  return null;
}

// 5. validatePassword()
export function validatePassword(password: string): string | null {
  if (!password) {
    return "Password is required.";
  }
  if (password.length < 8) {
    return "Password must be at least 8 characters long.";
  }
  // Check for at least one number and one letter
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  if (!hasLetter || !hasNumber) {
    return "Password must contain both letters and numbers.";
  }
  return null;
}

// 6 & 7. validateSignupForm(data) returning a typed result
export function validateSignupForm(data: SignupFormData): ValidationResult {
  const errors: ValidationError = {};

  // Validate standard fields
  const nameError = validateName(data.name);
  if (nameError) errors.name = nameError;

  const emailError = validateEmail(data.email);
  if (emailError) errors.email = emailError;

  const passwordError = validatePassword(data.password);
  if (passwordError) errors.password = passwordError;

  // Confirm Password specific matching logic
  if (!data.confirmPassword) {
    errors.confirmPassword = "Please confirm your password.";
  } else if (data.password !== data.confirmPassword) {
    errors.confirmPassword = "Passwords do not match.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
