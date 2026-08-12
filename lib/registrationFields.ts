import { EventType } from "./events";

export type FieldType = "text" | "email" | "tel" | "number" | "select" | "textarea";

export interface RegistrationField {
  name: string; // used as the form-state key
  label: string;
  type: FieldType;
  required: boolean;
  options?: string[]; // for "select"
  placeholder?: string;
  min?: number; // for "number"
  max?: number; // for "number"
  helpText?: string;
}

/**
 * Field sets per event type. Each event's registration form is generated
 * from this config, so adding a new field for a given type only requires
 * editing this file — no changes needed in the modal/UI component.
 */
export const REGISTRATION_FIELDS: Record<EventType, RegistrationField[]> = {
  Trek: [
    { name: "fullName", label: "Full Name", type: "text", required: true },
    {
      name: "gender",
      label: "Gender",
      type: "select",
      required: true,
      options: ["Male", "Female", "Other", "Prefer not to say"],
    },
    { name: "age", label: "Age", type: "number", required: true, min: 12, max: 80 },
    {
      name: "trekkingExperience",
      label: "Trekking Experience",
      type: "select",
      required: true,
      options: [
        "First-timer",
        "Beginner (1–3 treks)",
        "Intermediate (4–10 treks)",
        "Experienced (10+ treks)",
      ],
    },
    { name: "mobileNumber", label: "Mobile Number", type: "tel", required: true },
    {
      name: "emergencyContact",
      label: "Emergency Contact Number",
      type: "tel",
      required: true,
      helpText: "A number we can reach on the trail if needed.",
    },
    { name: "email", label: "Email Address", type: "email", required: true },
  ],

  Corporate: [
    { name: "companyName", label: "Company Name", type: "text", required: true },
    { name: "contactPerson", label: "Contact Person Name", type: "text", required: true },
    { name: "designation", label: "Designation", type: "text", required: true },
    { name: "companyEmail", label: "Work Email", type: "email", required: true },
    { name: "mobileNumber", label: "Mobile Number", type: "tel", required: true },
    {
      name: "participantCount",
      label: "Number of Participants",
      type: "number",
      required: true,
      min: 1,
      max: 500,
    },
    {
      name: "programFocus",
      label: "Preferred Program Focus",
      type: "select",
      required: false,
      options: ["Team-Building Trek", "Leadership Workshop", "Custom / Not Sure Yet"],
    },
  ],

  // Assumption: no field list was given for Bootcamp, so this defaults to
  // fields relevant to a multi-day physical program. Adjust freely in this file.
  Bootcamp: [
    { name: "fullName", label: "Full Name", type: "text", required: true },
    { name: "age", label: "Age", type: "number", required: true, min: 16, max: 65 },
    {
      name: "gender",
      label: "Gender",
      type: "select",
      required: true,
      options: ["Male", "Female", "Other", "Prefer not to say"],
    },
    {
      name: "fitnessLevel",
      label: "Current Fitness Level",
      type: "select",
      required: true,
      options: ["Beginner", "Moderately Active", "Very Active / Athlete"],
    },
    {
      name: "medicalConditions",
      label: "Medical Conditions / Injuries (if any)",
      type: "textarea",
      required: false,
      placeholder: "Leave blank if none",
    },
    { name: "mobileNumber", label: "Mobile Number", type: "tel", required: true },
    { name: "emergencyContact", label: "Emergency Contact Number", type: "tel", required: true },
    { name: "email", label: "Email Address", type: "email", required: true },
  ],
};
