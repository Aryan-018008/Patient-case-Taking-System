// Don't think to manipulate this code as it is Asynchronous.
// Thank You for reading this



//Patient Dashboard

// Lucide Initiate

document.addEventListener("DOMContentLoaded", () => {

    if (window.lucide) {
        lucide.createIcons();
    }

});



// Section navigation

const sidebarItems = document.querySelectorAll("[data-section]");
const sectionButtons = document.querySelectorAll("[data-section-button]");

const dashboardSections = document.querySelectorAll(".dashboard-section");

const topTitle = document.getElementById("topTitle");



const sectionTitles = {

    dashboard: "Dashboard",

    "new-case": "Start New Case",

    voice: "Voice Case Taking",

    form: "Touch / Form Input",

    reports: "Upload Previous Reports",

    assessment: "Ayurvedic Assessment",

    history: "Case History"

};



function showSection(sectionName) {

    // Section Hide

    dashboardSections.forEach(section => {

        section.classList.add("hidden");

    });


    // Show selected section 

    const selectedSection =
        document.getElementById(`section-${sectionName}`);

    if (selectedSection) {

        selectedSection.classList.remove("hidden");

    }


    // Update sidebar active state 

    sidebarItems.forEach(item => {

        item.classList.remove("active");

        if (item.dataset.section === sectionName) {

            item.classList.add("active");

        }

    });


    // Update top title

    if (topTitle) {

        topTitle.textContent =
            sectionTitles[sectionName] || "Dashboard";

    }


    

    closeMobileSidebar();


    //Scroll to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



//Sidebar

sidebarItems.forEach(item => {

    item.addEventListener("click", () => {

        const sectionName = item.dataset.section;

        showSection(sectionName);

    });

});



// Cards

sectionButtons.forEach(button => {

    button.addEventListener("click", () => {

        const sectionName =
            button.dataset.sectionButton;

        showSection(sectionName);

    });

});



// Responsive Sidebar

const menuBtn =
    document.getElementById("menuBtn");

const sidebar =
    document.getElementById("sidebar");

const sidebarOverlay =
    document.getElementById("sidebarOverlay");



function openMobileSidebar() {

    if (!sidebar) return;

    sidebar.classList.add("open");

    sidebarOverlay.classList.remove("hidden");

}



function closeMobileSidebar() {

    if (!sidebar) return;

    sidebar.classList.remove("open");

    sidebarOverlay.classList.add("hidden");

}



if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        openMobileSidebar();

    });

}



if (sidebarOverlay) {

    sidebarOverlay.addEventListener("click", () => {

        closeMobileSidebar();

    });

}



// new-case

const newCaseForm =
    document.getElementById("newCaseForm");



if (newCaseForm) {

    newCaseForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const formData =
            new FormData(newCaseForm);


        const newCase = {

            id: Date.now(),

            fullName: formData.get("fullName"),

            age: formData.get("age"),

            complaint: formData.get("complaint"),

            date: new Date().toLocaleDateString()

        };


        /* Get previous cases */

        const existingCases =
            JSON.parse(
                localStorage.getItem("AyurCaseCases")
            ) || [];


        existingCases.push(newCase);


        /* Save */

        localStorage.setItem(
            "AyurCaseCases",
            JSON.stringify(existingCases)
        );


        showToast(
            "New case created successfully."
        );


        newCaseForm.reset();


        loadCaseHistory();

    });

}



// Report Upload

const reportInput =
    document.getElementById("reportInput");

const selectedFiles =
    document.getElementById("selectedFiles");



if (reportInput) {

    reportInput.addEventListener("change", () => {

        selectedFiles.innerHTML = "";


        const files =
            Array.from(reportInput.files);


        if (files.length === 0) {

            return;

        }


        files.forEach(file => {

            const fileItem =
                document.createElement("div");


            fileItem.className =
                "flex items-center justify-between " +
                "gap-3 p-3 rounded-xl " +
                "bg-cream border border-slate-100";


            fileItem.innerHTML = `

                <div class="flex items-center gap-3 min-w-0">

                    <div class="w-9 h-9 rounded-lg
                                bg-teal/10 text-teal
                                grid place-items-center shrink-0">

                        <i data-lucide="file-text"
                           class="w-4 h-4"></i>

                    </div>

                    <div class="min-w-0">

                        <p class="text-sm font-semibold truncate">
                            ${escapeHTML(file.name)}
                        </p>

                        <p class="text-xs text-slate-400">
                            ${formatFileSize(file.size)}
                        </p>

                    </div>

                </div>

                <span class="text-xs font-semibold text-teal">
                    Selected
                </span>

            `;


            selectedFiles.appendChild(fileItem);

        });


        if (window.lucide) {

            lucide.createIcons();

        }

    });

}



// Ayurvedic Assessment Form 

const ayurvedicForm =
    document.getElementById("ayurvedicForm");



if (ayurvedicForm) {

    ayurvedicForm.addEventListener("submit", function (event) {

        event.preventDefault();


        // Browser validation

        if (!ayurvedicForm.checkValidity()) {

            ayurvedicForm.reportValidity();

            return;

        }


        const formData =
            new FormData(ayurvedicForm);


        // Collect symptoms

        const symptoms =
            Array.from(
                document.querySelectorAll(
                    'input[name="symptoms"]:checked'
                )
            ).map(input => input.value);



        // Create assessment object 

        const assessment = {

            id: Date.now(),

            createdAt:
                new Date().toLocaleString(),

            gender:
                formData.get("gender"),

            energy:
                formData.get("energy"),

            bodyFrame:
                formData.get("bodyFrame"),

            skin:
                formData.get("skin"),

            temperature:
                formData.get("temperature"),

            appetite:
                formData.get("appetite"),

            digestion:
                formData.get("digestion"),

            sleep:
                formData.get("sleep"),

            sleepDuration:
                formData.get("sleepDuration"),

            bowel:
                formData.get("bowel"),

            activity:
                formData.get("activity"),

            stress:
                formData.get("stress"),


            // Dashavidha

            prakriti:
                formData.get("dashPrakriti"),

            vikriti:
                formData.get("vikriti"),

            sara:
                formData.get("sara"),

            samhanana:
                formData.get("samhanana"),

            pramana:
                formData.get("pramana"),

            satmya:
                formData.get("satmya"),

            satva:
                formData.get("satva"),

            aharaShakti:
                formData.get("aharaShakti"),

            vyayama:
                formData.get("vyayama"),

            vaya:
                formData.get("vaya"),


            symptoms: symptoms,


            additionalNotes:
                formData.get("additionalNotes")

        };



        // Local Storage Save 

        localStorage.setItem(
            "AyurCaseAyurvedicAssessment",
            JSON.stringify(assessment)
        );



        // Toastify alert on success 

        showToast(
            "Ayurvedic assessment submitted successfully."
        );


        // Change Buttton 

        const submitButton =
            ayurvedicForm.querySelector(
                'button[type="submit"]'
            );


        if (submitButton) {

            submitButton.textContent =
                "Assessment Saved ✓";

            submitButton.classList.remove(
                "bg-teal"
            );

            submitButton.classList.add(
                "bg-emerald-600"
            );

        }


        

        updateAssessmentProgress();

    });

}



// Continuing Assessment 

function updateAssessmentProgress() {

    if (!ayurvedicForm) return;


    const requiredFields =
        Array.from(
            ayurvedicForm.querySelectorAll(
                "[required]"
            )
        );


    let completed = 0;


    requiredFields.forEach(field => {

        if (field.type === "radio") {

            const radioGroup =
                ayurvedicForm.querySelectorAll(
                    `input[name="${field.name}"]`
                );


            const checked =
                Array.from(radioGroup)
                    .some(radio => radio.checked);


            if (checked) {

                completed++;

            }

        } else {

            if (field.value.trim() !== "") {

                completed++;

            }

        }

    });


    const uniqueRequiredNames =
        new Set(
            requiredFields.map(field => field.name)
        );


    let totalGroups =
        uniqueRequiredNames.size;


    let completedGroups = 0;


    uniqueRequiredNames.forEach(name => {

        const fields =
            ayurvedicForm.querySelectorAll(
                `[name="${name}"]`
            );


        if (!fields.length) return;


        if (fields[0].type === "radio") {

            if (
                Array.from(fields)
                    .some(field => field.checked)
            ) {

                completedGroups++;

            }

        } else {

            if (
                fields[0].value.trim() !== ""
            ) {

                completedGroups++;

            }

        }

    });


    const percentage =
        totalGroups === 0
            ? 0
            : Math.round(
                (completedGroups / totalGroups) * 100
            );



    const progressText =
        document.getElementById(
            "assessmentProgress"
        );


    const progressBar =
        document.getElementById(
            "assessmentProgressBar"
        );


    if (progressText) {

        progressText.textContent =
            `${percentage}%`;

    }


    if (progressBar) {

        progressBar.style.width =
            `${percentage}%`;

    }

}



// Assessment Form 

if (ayurvedicForm) {

    ayurvedicForm.addEventListener(
        "input",
        updateAssessmentProgress
    );

    ayurvedicForm.addEventListener(
        "change",
        updateAssessmentProgress
    );

}



// History (Prev. Case) 

function loadCaseHistory() {

    const historyContainer =
        document.getElementById("caseHistory");


    if (!historyContainer) return;


    const cases =
        JSON.parse(
            localStorage.getItem("AyurCaseCases")
        ) || [];


    if (cases.length === 0) {

        historyContainer.innerHTML = `

            <div class="bg-white border border-slate-200
                        rounded-2xl p-6">

                <div class="flex items-center gap-4">

                    <div class="w-11 h-11 rounded-xl
                                bg-teal/10 text-teal
                                grid place-items-center">

                        <i data-lucide="file-text"
                           class="w-5 h-5"></i>

                    </div>

                    <div>

                        <p class="font-semibold">
                            No previous cases
                        </p>

                        <p class="text-sm text-slate-500 mt-1">
                            Your submitted cases will appear here.
                        </p>

                    </div>

                </div>

            </div>

        `;

    } else {

        historyContainer.innerHTML = "";


        cases
            .slice()
            .reverse()
            .forEach(caseItem => {

                const item =
                    document.createElement("div");


                item.className =
                    "bg-white border border-slate-200 " +
                    "rounded-2xl p-6";


                item.innerHTML = `

                    <div class="flex items-start justify-between gap-4">

                        <div class="flex items-start gap-4">

                            <div class="w-11 h-11 rounded-xl
                                        bg-teal/10 text-teal
                                        grid place-items-center shrink-0">

                                <i data-lucide="file-text"
                                   class="w-5 h-5"></i>

                            </div>

                            <div>

                                <p class="font-bold">
                                    ${escapeHTML(caseItem.fullName)}
                                </p>

                                <p class="text-sm text-slate-500 mt-1">
                                    Age: ${escapeHTML(caseItem.age)}
                                </p>

                                <p class="mt-3 text-sm text-slate-600">
                                    ${escapeHTML(caseItem.complaint)}
                                </p>

                            </div>

                        </div>

                        <span class="text-xs font-semibold
                                     text-teal bg-teal/10
                                     px-3 py-1.5 rounded-full">

                            ${escapeHTML(caseItem.date)}

                        </span>

                    </div>

                `;


                historyContainer.appendChild(item);

            });

    }


    if (window.lucide) {

        lucide.createIcons();

    }

}



// Toastify 

function showToast(message) {

    const toast =
        document.getElementById("toast");


    if (!toast) return;


    toast.textContent =
        message;


    toast.classList.remove(
        "hidden"
    );


    setTimeout(() => {

        toast.classList.add(
            "hidden"
        );

    }, 3000);

}



// File Size 

function formatFileSize(bytes) {

    if (bytes === 0) {

        return "0 Bytes";

    }


    const units = [
        "Bytes",
        "KB",
        "MB",
        "GB"
    ];


    const index =
        Math.floor(
            Math.log(bytes) /
            Math.log(1024)
        );


    return (
        parseFloat(
            (bytes /
                Math.pow(1024, index))
                .toFixed(2)
        ) +
        " " +
        units[index]
    );

}



// Escape @ HTml

function escapeHTML(value) {

    if (value === null || value === undefined) {

        return "";

    }


    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}



// Page Load

loadCaseHistory();


// Intial progress 

updateAssessmentProgress();