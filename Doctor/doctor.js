document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       LUCIDE ICONS
    ========================================================== */

    lucide.createIcons();


    /* =========================================================
       ELEMENTS
    ========================================================== */

    const sidebar = document.getElementById("sidebar");
    const sidebarOverlay = document.getElementById("sidebarOverlay");
    const menuBtn = document.getElementById("menuBtn");

    const topTitle = document.getElementById("topTitle");

    const sidebarItems = document.querySelectorAll(".sidebar-item");
    const sections = document.querySelectorAll(".dashboard-section");

    const toast = document.getElementById("toast");


    /* =========================================================
       SECTION TITLES
    ========================================================== */

    const sectionTitles = {

        dashboard: "Dashboard",
        patients: "Today's Patients",
        pending: "Pending Cases",
        profile: "Patient Profile",
        summary: "Clinical Summary",
        assessment: "Ayurvedic Assessment",
        reports: "Previous Reports",
        redflags: "Red Flags",
        edit: "Edit Summary",
        confirm: "Confirm Case"

    };


    /* =========================================================
       SHOW SECTION
    ========================================================== */

    function showSection(sectionName) {

        sections.forEach(section => {
            section.classList.add("hidden");
        });


        const targetSection =
            document.getElementById(`section-${sectionName}`);


        if (targetSection) {
            targetSection.classList.remove("hidden");
        }


        sidebarItems.forEach(item => {

            item.classList.remove("active");
            item.classList.remove("font-semibold");

            item.classList.add("font-medium");
            item.classList.add("text-slate-600");

        });


        const activeItem =
            document.querySelector(
                `.sidebar-item[data-section="${sectionName}"]`
            );


        if (activeItem) {

            activeItem.classList.add("active");
            activeItem.classList.add("font-semibold");

            activeItem.classList.remove("font-medium");
            activeItem.classList.remove("text-slate-600");

        }


        if (topTitle) {
            topTitle.textContent =
                sectionTitles[sectionName] || "Dashboard";
        }


        closeMobileSidebar();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    /* =========================================================
       SIDEBAR NAVIGATION
    ========================================================== */

    sidebarItems.forEach(item => {

        item.addEventListener("click", () => {

            const section =
                item.dataset.section;

            showSection(section);

        });

    });


    /* =========================================================
       BUTTON NAVIGATION
    ========================================================== */

    document
        .querySelectorAll("[data-section-button]")
        .forEach(button => {

            button.addEventListener("click", () => {

                const section =
                    button.dataset.sectionButton;

                showSection(section);

            });

        });


    /* =========================================================
       MOBILE SIDEBAR
    ========================================================== */

    function openMobileSidebar() {

        sidebar.classList.add("open");

        sidebarOverlay.classList.remove("hidden");

    }


    function closeMobileSidebar() {

        sidebar.classList.remove("open");

        sidebarOverlay.classList.add("hidden");

    }


    if (menuBtn) {

        menuBtn.addEventListener("click", openMobileSidebar);

    }


    if (sidebarOverlay) {

        sidebarOverlay.addEventListener(
            "click",
            closeMobileSidebar
        );

    }


    /* =========================================================
       PATIENT DATA
    ========================================================== */

    const patients = {

        rahul: {

            initials: "RS",

            name: "Rahul Sharma",

            caseId: "AYU-1024",

            age: "34 years",

            gender: "Male",

            blood: "B+",

            status: "Pending",

            complaint:
                "Patient reports recurring gastric discomfort and burning sensation after meals."

        },


        priya: {

            initials: "PS",

            name: "Priya Singh",

            caseId: "AYU-1025",

            age: "29 years",

            gender: "Female",

            blood: "O+",

            status: "Reviewed",

            complaint:
                "Patient reports recurring headaches with occasional fatigue."

        },


        amit: {

            initials: "AK",

            name: "Amit Kumar",

            caseId: "AYU-1027",

            age: "41 years",

            gender: "Male",

            blood: "A+",

            status: "Pending",

            complaint:
                "Patient reports persistent fatigue and reduced energy during the day."

        },


        neha: {

            initials: "NP",

            name: "Neha Patel",

            caseId: "AYU-1030",

            age: "37 years",

            gender: "Female",

            blood: "AB+",

            status: "Pending",

            complaint:
                "Patient reports disturbed sleep and difficulty maintaining a regular sleep schedule."

        }

    };


    let currentPatient = patients.rahul;


    /* =========================================================
       LOAD PATIENT
    ========================================================== */

    function loadPatient(patientId) {

        const patient =
            patients[patientId];

        if (!patient) return;


        currentPatient = patient;


        /* PROFILE */

        const profileAvatar =
            document.getElementById("profileAvatar");

        const profileName =
            document.getElementById("profileName");

        const profileCase =
            document.getElementById("profileCase");

        const profileAge =
            document.getElementById("profileAge");

        const profileGender =
            document.getElementById("profileGender");

        const profileBlood =
            document.getElementById("profileBlood");

        const profileStatus =
            document.getElementById("profileStatus");

        const profileComplaint =
            document.getElementById("profileComplaint");


        if (profileAvatar)
            profileAvatar.textContent =
                patient.initials;


        if (profileName)
            profileName.textContent =
                patient.name;


        if (profileCase)
            profileCase.textContent =
                `Case #${patient.caseId}`;


        if (profileAge)
            profileAge.textContent =
                patient.age;


        if (profileGender)
            profileGender.textContent =
                patient.gender;


        if (profileBlood)
            profileBlood.textContent =
                patient.blood;


        if (profileStatus) {

            profileStatus.textContent =
                patient.status;

            profileStatus.classList.remove(
                "text-amber-600",
                "text-emerald-600"
            );


            if (patient.status === "Pending") {

                profileStatus.classList.add(
                    "text-amber-600"
                );

            } else {

                profileStatus.classList.add(
                    "text-emerald-600"
                );

            }

        }


        if (profileComplaint)
            profileComplaint.textContent =
                patient.complaint;


        /* CONFIRM CASE */

        const confirmCaseHeading =
            document.querySelector(
                "#section-confirm h3"
            );

        const confirmPatient =
            document.querySelector(
                "#section-confirm .text-sm.text-slate-500"
            );


        if (confirmCaseHeading)
            confirmCaseHeading.textContent =
                `Case #${patient.caseId}`;


        if (confirmPatient)
            confirmPatient.textContent =
                patient.name;


        /* GO TO PROFILE */

        showSection("profile");


        showToast(
            `${patient.name}'s case loaded`
        );

    }


    /* =========================================================
       PATIENT CLICK
    ========================================================== */

    document
        .querySelectorAll("[data-patient]")
        .forEach(button => {

            button.addEventListener("click", () => {

                const patientId =
                    button.dataset.patient;

                loadPatient(patientId);

            });

        });


    /* =========================================================
       PATIENT SEARCH
    ========================================================== */

    const patientSearch =
        document.getElementById("patientSearch");


    if (patientSearch) {

        patientSearch.addEventListener(
            "input",
            () => {

                const searchValue =
                    patientSearch.value
                        .trim()
                        .toLowerCase();


                document
                    .querySelectorAll(".patient-search-row")
                    .forEach(row => {

                        const text =
                            row.textContent
                                .toLowerCase();


                        if (
                            text.includes(searchValue)
                        ) {

                            row.classList.remove(
                                "hidden"
                            );

                        } else {

                            row.classList.add(
                                "hidden"
                            );

                        }

                    });

            }
        );

    }


    /* =========================================================
       SUMMARY FORM
    ========================================================== */

    const summaryForm =
        document.getElementById("summaryForm");


    if (summaryForm) {

        summaryForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const impression =
                    document.getElementById(
                        "clinicalImpression"
                    ).value.trim();


                const notes =
                    document.getElementById(
                        "doctorNotes"
                    ).value.trim();


                const followUp =
                    document.getElementById(
                        "followUp"
                    ).value;


                if (!impression) {

                    showToast(
                        "Please enter the clinical impression."
                    );

                    return;

                }


                if (!notes) {

                    showToast(
                        "Please enter doctor's notes."
                    );

                    return;

                }


                const doctorObservation =
                    document.getElementById(
                        "doctorObservation"
                    );


                if (doctorObservation) {

                    doctorObservation.textContent =
                        impression;

                }


                showToast(
                    "Clinical summary saved successfully."
                );


                setTimeout(() => {

                    showSection("summary");

                }, 500);

            }
        );

    }


    /* =========================================================
       CONFIRM CASE
    ========================================================== */

    const confirmCaseBtn =
        document.getElementById(
            "confirmCaseBtn"
        );


    if (confirmCaseBtn) {

        confirmCaseBtn.addEventListener(
            "click",
            () => {

                const patient =
                    currentPatient;


                if (!patient) {

                    showToast(
                        "Please select a patient first."
                    );

                    return;

                }


                patient.status =
                    "Confirmed";


                /* UPDATE PROFILE STATUS */

                const profileStatus =
                    document.getElementById(
                        "profileStatus"
                    );


                if (profileStatus) {

                    profileStatus.textContent =
                        "Confirmed";

                    profileStatus.classList.remove(
                        "text-amber-600"
                    );

                    profileStatus.classList.add(
                        "text-emerald-600"
                    );

                }


                /* BUTTON */

                confirmCaseBtn.innerHTML = `

                    <i data-lucide="check"
                       class="w-4 h-4 inline mr-1"></i>

                    Case Confirmed

                `;


                confirmCaseBtn.disabled = true;


                confirmCaseBtn.classList.remove(
                    "bg-teal",
                    "hover:bg-tealDark"
                );


                confirmCaseBtn.classList.add(
                    "bg-emerald-600"
                );


                lucide.createIcons();


                showToast(
                    `${patient.name}'s case has been confirmed.`
                );

            }
        );

    }


    /* =========================================================
       TOAST
    ========================================================== */

    let toastTimer;


    function showToast(message) {

        if (!toast) return;


        toast.textContent =
            message;


        toast.classList.remove(
            "hidden"
        );


        clearTimeout(toastTimer);


        toastTimer =
            setTimeout(() => {

                toast.classList.add(
                    "hidden"
                );

            }, 3000);

    }


    /* =========================================================
       INITIAL STATE
    ========================================================== */

    showSection("dashboard");

});