// // Kind and respectful warning from the Developer'side 
// // Don't try to manipulate this code without the permission of Core Developer
// // Resulting in which , The Asynchronous behaviour of JavaScript would change the logical and functional entity of the code
// // Thanks for reading till here.



// document.addEventListener("DOMContentLoaded", () => {

   
//     // Lucide
    
//     if (window.lucide) {
//         lucide.createIcons();
//     }


//     // Mobile view (Hamburger later-on)
    
//     const menuBtn = document.getElementById("menuBtn");
//     const mobileMenu = document.getElementById("mobileMenu");

//     if (menuBtn && mobileMenu) {

//         menuBtn.addEventListener("click", () => {

//             mobileMenu.classList.toggle("hidden");

//             const icon = menuBtn.querySelector("svg");

//             if (icon) {

//                 if (mobileMenu.classList.contains("hidden")) {

//                     icon.outerHTML = `
//                         <i data-lucide="menu" class="w-6 h-6"></i>
//                     `;

//                 } else {

//                     icon.outerHTML = `
//                         <i data-lucide="x" class="w-6 h-6"></i>
//                     `;
//                 }

//                 lucide.createIcons();
//             }
//         });


//         // Mobile CloseUp 
//         const mobileLinks = mobileMenu.querySelectorAll("a");

//         mobileLinks.forEach(link => {

//             link.addEventListener("click", () => {
//                 mobileMenu.classList.add("hidden");

//                 const icon = menuBtn.querySelector("svg");

//                 if (icon) {
//                     icon.outerHTML = `
//                         <i data-lucide="menu" class="w-6 h-6"></i>
//                     `;

//                     lucide.createIcons();
//                 }
//             });

//         });
//     }


    
//     // Login_SignUp PopUp
    
//     // const modal = document.getElementById("modal");
//     // const modalTitle = document.getElementById("modalTitle");
//     // const closeModal = document.getElementById("closeModal");
//     // const demoForm = document.getElementById("demoForm");


//     // Open Login / Signup PopUp
//     // const actionButtons = document.querySelectorAll(
//     //     '[data-action="login"], [data-action="signup"]'
//     // );


//     // actionButtons.forEach(button => {

//     //     button.addEventListener("click", () => {

//     //         const action = button.dataset.action;

//     //         if (action === "login") {

//     //             modalTitle.textContent = "Welcome back";

//     //         } else {

//     //             modalTitle.textContent = "Create your account";

//     //         }

//     //         modal.classList.remove("hidden");

//     //         document.body.classList.add("overflow-hidden");

//     //         if (window.lucide) {
//     //             lucide.createIcons();
//     //         }

//     //     });

//     // });


   
//     // PopUp Closing


//     // function hideModal() {

//     //     modal.classList.add("hidden");

//     //     document.body.classList.remove("overflow-hidden");

//     // }


//     // if (closeModal) {

//     //     closeModal.addEventListener("click", hideModal);

//     // }


//     // Close modal when clicking outside
//     // if (modal) {

//     //     modal.addEventListener("click", (event) => {

//     //         if (event.target === modal) {

//     //             hideModal();

//     //         }

//     //     });

//     // }


//     // Close modal using ESC key
//     // document.addEventListener("keydown", (event) => {

//     //     if (event.key === "Escape") {

//     //         hideModal();

//     //     }

//     // });


//     //Login Demo

//     // if (demoForm) {

//     //     demoForm.addEventListener("submit", (event) => {

//     //         event.preventDefault();


//     //         const isLogin =
//     //             modalTitle.textContent === "Welcome back";


//     //         if (isLogin) {

//     //             alert(
//     //                 "Prototype login successful!\n\n" +
//     //                 "Role-based dashboard will be connected later."
//     //             );

//     //         } else {

//     //             alert(
//     //                 "Prototype signup complete!\n\n" +
//     //                 "Node.js + MongoDB backend will be connected later."
//     //             );

//     //         }


//     //         hideModal();

//     //         demoForm.reset();

//     //     });

//     // }

//     // ============================================
// // LOGIN - ROLE BASED PROTOTYPE
// // ============================================

// const modal = document.getElementById("modal");
// const modalTitle = document.getElementById("modalTitle");
// const closeModal = document.getElementById("closeModal");

// const continueRoleBtn =
//     document.getElementById("continueRoleBtn");

// const roleInputs =
//     document.querySelectorAll('input[name="userRole"]');


// // ============================================
// // OPEN LOGIN MODAL
// // ============================================

// const loginButtons =
//     document.querySelectorAll('[data-action="login"]');


// loginButtons.forEach(button => {

//     button.addEventListener("click", () => {

//         // Open modal
//         modal.classList.remove("hidden");

//         // Prevent background scrolling
//         document.body.classList.add("overflow-hidden");

//         // Reset previous role selection
//         roleInputs.forEach(input => {
//             input.checked = false;
//         });

//         // Reset button
//         continueRoleBtn.disabled = true;

//         continueRoleBtn.textContent = "Continue";

//         continueRoleBtn.classList.remove(
//             "bg-teal",
//             "text-white",
//             "hover:bg-tealDark",
//             "shadow-lg"
//         );

//         continueRoleBtn.classList.add(
//             "bg-slate-200",
//             "text-slate-400",
//             "cursor-not-allowed"
//         );

//         if (window.lucide) {
//             lucide.createIcons();
//         }

//     });

// });


// // ============================================
// // ROLE SELECTION
// // ============================================

// roleInputs.forEach(input => {

//     input.addEventListener("change", () => {

//         const selectedRole = input.value;

//         // Enable button
//         continueRoleBtn.disabled = false;


//         // Change button text
//         if (selectedRole === "patient") {

//             continueRoleBtn.textContent =
//                 "Continue as Patient";

//         }

//         else if (selectedRole === "doctor") {

//             continueRoleBtn.textContent =
//                 "Continue as Doctor";

//         }


//         // Active button styling
//         continueRoleBtn.classList.remove(
//             "bg-slate-200",
//             "text-slate-400",
//             "cursor-not-allowed"
//         );

//         continueRoleBtn.classList.add(
//             "bg-teal",
//             "text-white",
//             "hover:bg-tealDark",
//             "shadow-lg"
//         );

//     });

// });


// // ============================================
// // CONTINUE → ROLE DASHBOARD
// // ============================================

// continueRoleBtn.addEventListener("click", () => {

//     const selectedRole =
//         document.querySelector(
//             'input[name="userRole"]:checked'
//         );


//     // Safety check
//     if (!selectedRole) {

//         alert("Please select your role first.");

//         return;

//     }


//     const role = selectedRole.value;


//     // ========================================
//     // PATIENT
//     // ========================================

//     if (role === "patient") {

//         window.location.href =
//             "patient/dashboard.html";

//     }


//     // ========================================
//     // DOCTOR
//     // ========================================

//     else if (role === "doctor") {

//         window.location.href =
//             "doctor/dashboard.html";

//     }

// });


// // ============================================
// // CLOSE MODAL
// // ============================================

// function hideModal() {

//     modal.classList.add("hidden");

//     document.body.classList.remove("overflow-hidden");

// }


// if (closeModal) {

//     closeModal.addEventListener(
//         "click",
//         hideModal
//     );

// }


// // Click outside modal
// if (modal) {

//     modal.addEventListener("click", (event) => {

//         if (event.target === modal) {

//             hideModal();

//         }

//     });

// }


// // ESC → Close
// document.addEventListener("keydown", (event) => {

//     if (event.key === "Escape") {

//         hideModal();

//     }

// });

// // ============================================
// // SIGN UP - TEMPORARILY UNAVAILABLE
// // ============================================

// const signupModal =
//     document.getElementById("signupModal");

// const closeSignupModal =
//     document.getElementById("closeSignupModal");

// const signupCloseButton =
//     document.getElementById("signupCloseButton");


// // ============================================
// // OPEN SIGN UP MODAL
// // ============================================

// const signupButtons =
//     document.querySelectorAll('[data-action="signup"]');


// signupButtons.forEach(button => {

//     button.addEventListener("click", () => {

//         signupModal.classList.remove("hidden");

//         document.body.classList.add("overflow-hidden");

//         if (window.lucide) {
//             lucide.createIcons();
//         }

//     });

// });


// // ============================================
// // CLOSE SIGN UP MODAL
// // ============================================

// function hideSignupModal() {

//     signupModal.classList.add("hidden");

//     document.body.classList.remove("overflow-hidden");

// }


// // Close using X
// if (closeSignupModal) {

//     closeSignupModal.addEventListener(
//         "click",
//         hideSignupModal
//     );

// }


// // Close using Okay button
// if (signupCloseButton) {

//     signupCloseButton.addEventListener(
//         "click",
//         hideSignupModal
//     );

// }


// // Close by clicking outside
// if (signupModal) {

//     signupModal.addEventListener("click", (event) => {

//         if (event.target === signupModal) {

//             hideSignupModal();

//         }

//     });

// }


// // Close using ESC
// document.addEventListener("keydown", (event) => {

//     if (event.key === "Escape") {

//         hideSignupModal();

//     }

// });


//     // Smooth Scrolling UX

//     const navLinks = document.querySelectorAll(
//         'a[href^="#"]'
//     );


//     navLinks.forEach(link => {

//         link.addEventListener("click", function (event) {

//             const targetId = this.getAttribute("href");

//             if (
//                 targetId &&
//                 targetId !== "#" &&
//                 document.querySelector(targetId)
//             ) {

//                 event.preventDefault();

//                 const target =
//                     document.querySelector(targetId);

//                 const headerOffset = 80;

//                 const targetPosition =
//                     target.getBoundingClientRect().top +
//                     window.scrollY -
//                     headerOffset;


//                 window.scrollTo({
//                     top: targetPosition,
//                     behavior: "smooth"
//                 });

//             }

//         });

//     });

// });

// Kind and respectful warning from the Developer'side
// Don't try to manipulate this code without the permission of Core Developer
// Resulting in which, The Asynchronous behaviour of JavaScript would change
// the logical and functional entity of the code.
// Thanks for reading till here.


document.addEventListener("DOMContentLoaded", () => {


    // ============================================
    // LUCIDE ICONS
    // ============================================

    if (window.lucide) {
        lucide.createIcons();
    }



    // ============================================
    // MOBILE HAMBURGER MENU
    // ============================================

    // const menuBtn =
    //     document.getElementById("menuBtn");

    // const mobileMenu =
    //     document.getElementById("mobileMenu");


    // if (menuBtn && mobileMenu) {

    //     menuBtn.addEventListener("click", () => {

    //         const isHidden =
    //             mobileMenu.classList.contains("hidden");


    //         mobileMenu.classList.toggle("hidden");


    //         // Accessibility
    //         menuBtn.setAttribute(
    //             "aria-expanded",
    //             String(isHidden)
    //         );


    //         // Change hamburger icon
    //         const icon =
    //             menuBtn.querySelector("svg");


    //         if (icon) {

    //             if (isHidden) {

    //                 icon.outerHTML = `
    //                     <i
    //                         data-lucide="x"
    //                         class="w-6 h-6"
    //                     ></i>
    //                 `;

    //             } else {

    //                 icon.outerHTML = `
    //                     <i
    //                         data-lucide="menu"
    //                         class="w-6 h-6"
    //                     ></i>
    //                 `;
    //             }


    //             lucide.createIcons();

    //         }

    //     });


    //     // Mobile navigation links
    //     const mobileLinks =
    //         mobileMenu.querySelectorAll(
    //             ".mobile-nav-link"
    //         );


    //     mobileLinks.forEach(link => {

    //         link.addEventListener("click", () => {

    //             mobileMenu.classList.add("hidden");


    //             menuBtn.setAttribute(
    //                 "aria-expanded",
    //                 "false"
    //             );


    //             const icon =
    //                 menuBtn.querySelector("svg");


    //             if (icon) {

    //                 icon.outerHTML = `
    //                     <i
    //                         data-lucide="menu"
    //                         class="w-6 h-6"
    //                     ></i>
    //                 `;

    //                 lucide.createIcons();

    //             }

    //         });

    //     });

    // }

    // ============================================
// MOBILE HAMBURGER MENU
// ============================================

// ================================
// LUCIDE ICONS
// ================================

lucide.createIcons();


// ================================
// MOBILE HAMBURGER MENU
// ================================

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");


// Check that elements exist
if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", function () {

        // Check current menu state
        const isCurrentlyHidden =
            mobileMenu.classList.contains("hidden");


        // Toggle menu
        mobileMenu.classList.toggle("hidden");


        // Update aria-expanded
        menuBtn.setAttribute(
            "aria-expanded",
            isCurrentlyHidden ? "true" : "false"
        );


        // Change icon
        if (isCurrentlyHidden) {

            menuBtn.innerHTML =
                '<i data-lucide="x" class="w-6 h-6"></i>';

        } else {

            menuBtn.innerHTML =
                '<i data-lucide="menu" class="w-6 h-6"></i>';

        }


        // Re-create Lucide icon
        lucide.createIcons();

    });


    // ================================
    // CLOSE MENU WHEN LINK IS CLICKED
    // ================================

    document
        .querySelectorAll(".mobile-nav-link")
        .forEach(function (link) {

            link.addEventListener("click", function () {

                // Close mobile menu
                mobileMenu.classList.add("hidden");


                // Reset aria
                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );


                // Change X back to hamburger
                menuBtn.innerHTML =
                    '<i data-lucide="menu" class="w-6 h-6"></i>';


                // Re-create icon
                lucide.createIcons();

            });

        });

}



    // ============================================
    // LOGIN MODAL
    // ============================================

    const modal =
        document.getElementById("modal");

    const closeModal =
        document.getElementById("closeModal");

    const continueRoleBtn =
        document.getElementById(
            "continueRoleBtn"
        );

    const roleInputs =
        document.querySelectorAll(
            'input[name="userRole"]'
        );



    // ============================================
    // OPEN LOGIN
    // ============================================

    const loginButtons =
        document.querySelectorAll(
            '[data-action="login"]'
        );


    loginButtons.forEach(button => {

        button.addEventListener("click", () => {


            // Close mobile menu
            if (mobileMenu) {

                mobileMenu.classList.add(
                    "hidden"
                );

            }


            if (menuBtn) {

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }


            // Open modal
            if (modal) {

                modal.classList.remove(
                    "hidden"
                );

            }


            document.body.classList.add(
                "overflow-hidden"
            );


            // Reset role
            roleInputs.forEach(input => {

                input.checked = false;

            });


            // Reset continue button
            if (continueRoleBtn) {

                continueRoleBtn.disabled = true;

                continueRoleBtn.textContent =
                    "Continue";


                continueRoleBtn.classList.remove(
                    "bg-teal",
                    "text-white",
                    "hover:bg-tealDark",
                    "shadow-lg"
                );


                continueRoleBtn.classList.add(
                    "bg-slate-200",
                    "text-slate-400",
                    "cursor-not-allowed"
                );

            }


            if (window.lucide) {

                lucide.createIcons();

            }

        });

    });



    // ============================================
    // ROLE SELECTION
    // ============================================

    roleInputs.forEach(input => {

        input.addEventListener("change", () => {

            const selectedRole =
                input.value;


            if (!continueRoleBtn) {
                return;
            }


            // Enable button
            continueRoleBtn.disabled = false;


            // Change text
            if (selectedRole === "patient") {

                continueRoleBtn.textContent =
                    "Continue as Patient";

            }

            else if (selectedRole === "doctor") {

                continueRoleBtn.textContent =
                    "Continue as Doctor";

            }


            // Active styling
            continueRoleBtn.classList.remove(
                "bg-slate-200",
                "text-slate-400",
                "cursor-not-allowed"
            );


            continueRoleBtn.classList.add(
                "bg-teal",
                "text-white",
                "hover:bg-tealDark",
                "shadow-lg"
            );

        });

    });



    // ============================================
    // ROLE → DASHBOARD
    // ============================================

    if (continueRoleBtn) {

        continueRoleBtn.addEventListener(
            "click",
            () => {

                const selectedRole =
                    document.querySelector(
                        'input[name="userRole"]:checked'
                    );


                if (!selectedRole) {

                    return;

                }


                const role =
                    selectedRole.value;


                if (role === "patient") {

                    window.location.href =
                        "Patient/patient.html";

                }


                else if (role === "doctor") {

                    window.location.href =
                        "Doctor/doctor.html";

                }

            }
        );

    }



    // ============================================
    // CLOSE LOGIN MODAL
    // ============================================

    function hideLoginModal() {

        if (modal) {

            modal.classList.add(
                "hidden"
            );

        }


        document.body.classList.remove(
            "overflow-hidden"
        );

    }


    if (closeModal) {

        closeModal.addEventListener(
            "click",
            hideLoginModal
        );

    }


    // Click outside login modal
    if (modal) {

        modal.addEventListener(
            "click",
            event => {

                if (event.target === modal) {

                    hideLoginModal();

                }

            }
        );

    }



    // ============================================
    // SIGNUP MODAL
    // ============================================

    const signupModal =
        document.getElementById(
            "signupModal"
        );

    const closeSignupModal =
        document.getElementById(
            "closeSignupModal"
        );

    const signupCloseButton =
        document.getElementById(
            "signupCloseButton"
        );



    // ============================================
    // OPEN SIGNUP
    // ============================================

    const signupButtons =
        document.querySelectorAll(
            '[data-action="signup"]'
        );


    signupButtons.forEach(button => {

        button.addEventListener("click", () => {


            // Close mobile menu
            if (mobileMenu) {

                mobileMenu.classList.add(
                    "hidden"
                );

            }


            if (menuBtn) {

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }


            // Open signup modal
            if (signupModal) {

                signupModal.classList.remove(
                    "hidden"
                );

            }


            document.body.classList.add(
                "overflow-hidden"
            );


            if (window.lucide) {

                lucide.createIcons();

            }

        });

    });



    // ============================================
    // CLOSE SIGNUP
    // ============================================

    function hideSignupModal() {

        if (signupModal) {

            signupModal.classList.add(
                "hidden"
            );

        }


        document.body.classList.remove(
            "overflow-hidden"
        );

    }


    // X button
    if (closeSignupModal) {

        closeSignupModal.addEventListener(
            "click",
            hideSignupModal
        );

    }


    // Okay button
    if (signupCloseButton) {

        signupCloseButton.addEventListener(
            "click",
            hideSignupModal
        );

    }


    // Click outside signup modal
    if (signupModal) {

        signupModal.addEventListener(
            "click",
            event => {

                if (event.target === signupModal) {

                    hideSignupModal();

                }

            }
        );

    }



    // ============================================
    // ESC KEY
    // ============================================

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                hideLoginModal();

                hideSignupModal();

            }

        }
    );



    // ============================================
    // SMOOTH SCROLLING
    // ============================================

    const navLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    navLinks.forEach(link => {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");


                if (
                    targetId &&
                    targetId !== "#" &&
                    document.querySelector(targetId)
                ) {

                    event.preventDefault();


                    const target =
                        document.querySelector(
                            targetId
                        );


                    const headerOffset = 80;


                    const targetPosition =
                        target.getBoundingClientRect()
                            .top +
                        window.scrollY -
                        headerOffset;


                    window.scrollTo({

                        top: targetPosition,

                        behavior: "smooth"

                    });

                }

            }
        );

    });



});