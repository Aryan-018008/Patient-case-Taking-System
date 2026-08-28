# 🌿 AyurCase

### Ayurvedic Clinical Documentation & Patient Management Platform

AyurCase is a web-based healthcare prototype designed to simplify **patient case collection, Ayurvedic assessment, clinical review, and documentation**.

The platform provides separate interfaces for **Patients** and **Doctors**, creating a structured workflow from patient information collection to physician case confirmation.

---


## 🔴 Live Link

This prototype is live at - https://ayurcase.netlify.app/


---

## 📌 Project Overview

Traditional clinical documentation can be time-consuming, especially when patient information is collected through unstructured conversations or manual paperwork.

**AyurCase** aims to provide a structured digital workflow where:

**Patient → Case Submission → Ayurvedic Assessment → Doctor Review → Clinical Summary → Case Confirmation**

The current version is developed as a **prototype** focusing primarily on the user interface, workflow, and core interaction experience.

---

# ✨ Key Features

## 👤 Patient Dashboard

Patients can manage and submit their consultation information through a dedicated dashboard.

### Features

* Dashboard overview
* Start a new case
* Voice case-taking interface
* Touch / form-based case input
* Upload previous medical reports
* Ayurvedic assessment form
* Case history
* Responsive design
* Interactive navigation

---

## 🌿 Ayurvedic Assessment

Patients can provide structured information related to their Ayurvedic health profile.

### Assessment Areas

* Basic Information
* Prakriti-related questions
* Body frame
* Skin type
* Temperature preference
* Digestion & appetite
* Sleep pattern
* Bowel habits
* Lifestyle
* Stress level
* Dashavidha Pariksha
* Current symptoms
* Additional notes

The assessment is designed to make patient-reported Ayurvedic information easier for the physician to review.

> **Note:** The assessment is intended for structured information collection and does not independently provide a medical diagnosis.

---

# 👨‍⚕️ Doctor Dashboard

The Doctor Dashboard provides a centralized workspace for reviewing patient cases.

### Main Sections

* **Today's Patients**
* **Pending Cases**
* **Patient Profile**
* **Clinical Summary**
* **Ayurvedic Assessment**
* **Previous Reports**
* **Red Flags**
* **Edit Summary**
* **Confirm Case**

### Doctor Workflow

```text
Today's Patients
       ↓
Select Patient
       ↓
Patient Profile
       ↓
Clinical Summary
       ↓
Review Ayurvedic Assessment
       ↓
Check Previous Reports
       ↓
Review Red Flags
       ↓
Edit Clinical Summary
       ↓
Confirm Case
```

---

# 🚫 Red Flags

The Doctor Dashboard includes a dedicated **Red Flags** section to highlight important information that may require additional attention.

For the prototype, red flags can be represented using mock/sample data.

The feature is intended to demonstrate how potentially important patient information could be surfaced to the physician in a structured interface.

---

# 🎨 UI / UX Design

AyurCase follows a clean and minimal healthcare-oriented design system.

### Primary Colors

| Color     | Value     |
| --------- | --------- |
| Ink       | `#172321` |
| Teal      | `#0F766E` |
| Teal Dark | `#115E59` |
| Sage      | `#84A98C` |
| Cream     | `#F7FAF8` |

### Design Principles

* Clean medical interface
* Minimal visual clutter
* Clear information hierarchy
* Consistent cards and spacing
* Responsive layout
* Accessible form controls
* Mobile-friendly sidebar
* Clear call-to-action buttons
* Consistent iconography

---

# 🛠️ Tech Stack

## Frontend

* HTML5
* CSS3
* JavaScript
* Tailwind CSS
* Lucide Icons

## Current Prototype

The current version primarily focuses on:

* Frontend UI
* Navigation
* Forms
* Dashboard interactions
* Mock patient/case data
* Prototype workflow

Backend services and AI integrations can be connected in future development phases.

---

# 📂 Project Structure

```text
AyurCase/
│
├── index.html
│
├── patient/
│   ├── patient.html
│   └── patient.js
│
├── doctor/
│   ├── doctor.html
│   └── doctor.js
│
└── README.md
```

> Folder names will be adjusted according to the final project structure.

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/Aryan-018008/Patient-case-Taking-System.git
```

## 2. Open the Project

Open the project folder in **Visual Studio Code**.

## 3. Run the Prototype

The project can be opened directly through the browser.

For a better development experience, use the **Live Server** extension in VS Code.

Example:

```text
Right Click → Open with Live Server
```

---

# 🧑‍💻 User Roles

AyurCase currently supports two primary roles.

## Patient

The patient can:

* Start a case
* Enter symptoms
* Provide health information
* Complete Ayurvedic assessment
* Upload previous reports
* View case history

## Doctor

The doctor can:

* View today's patients
* Review pending cases
* Open patient profiles
* Review clinical summaries
* Review Ayurvedic assessments
* View previous reports
* Identify red flags
* Edit clinical summaries
* Confirm cases

---

# 🔄 Complete Prototype Flow

```text
                    AYURCASE
                        │
            ┌───────────┴───────────┐
            │                       │
        PATIENT                   DOCTOR
            │                       │
      Start New Case          Today's Patients
            │                       │
      Patient Information      Pending Cases
            │                       │
      Symptoms / History      Patient Profile
            │                       │
      Upload Reports          Clinical Summary
            │                       │
      Ayurvedic Assessment    Ayurvedic Assessment
            │                       │
            └───────────┬───────────┘
                        │
                 Doctor Review
                        │
                   Red Flags
                        │
                 Edit Summary
                        │
                  Confirm Case
```

---

# 🎯 Project Objective

The primary objective of AyurCase is to demonstrate how a structured digital platform can improve the process of:

* Patient information collection
* Ayurvedic assessment
* Clinical documentation
* Physician case review
* Identification of important patient information
* Case management

The prototype focuses on creating a **simple, organized, and user-friendly clinical workflow**.

---

# 🔮 Future Scope

The prototype can be extended with the following features:

### Backend Integration

* User authentication
* Patient and doctor accounts
* Secure database
* Case management APIs
* Role-based access control

### AI Integration

* AI-assisted clinical summarization
* Speech-to-text case taking
* Automated information extraction
* Red-flag identification assistance
* Structured clinical documentation
* Ayurvedic assessment assistance

### Medical Records

* Secure document storage
* Prescription management
* Previous consultation history
* Medical report analysis

### Doctor Tools

* Patient search
* Appointment management
* Clinical notes
* Case status tracking
* Follow-up management

---

# ⚠️ Prototype Disclaimer

AyurCase is currently a **prototype developed for demonstration and evaluation purposes**.

The system does not replace a qualified healthcare professional and should not be used for autonomous diagnosis, treatment decisions, or emergency medical care.

Any  features proposed for future versions should function as **decision-support tools under qualified physician supervision**.

---


The current implementation prioritizes:

> **Usability + Workflow + Clinical Information Structure + Prototype Demonstration**

---


### 🌿 AyurCase

**Simplifying Patient Information. Structuring Clinical Documentation. Supporting Better Care.**
