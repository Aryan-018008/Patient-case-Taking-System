// Kind and respectful warning from the Developer'side
// Don't try to manipulate this code without the prior permission of Core Developer
// Resulting in which, The Asynchronous behaviour of JavaScript would change the logical and functional entities of the code.
// Thanks for reading till here.


document.addEventListener("DOMContentLoaded", () => {


    // Lucide Initiation

    if (window.lucide) {
        lucide.createIcons();
    }

// Lucide

lucide.createIcons();


// Hamburger

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


    // Menu  Close on click "❌"

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


                // Icon recreation
                lucide.createIcons();

            });

        });

}



    // Login PopUP

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



    
    // Login PopUp- Opening

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


            // Role Reset
            roleInputs.forEach(input => {

                input.checked = false;

            });


            //  Continue button reset
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



    
    // Roles (P+D)

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

    // Role-based Navigation (Patient and Doctor)
    

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



    
    // Closing of Login  Modal 

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
               }});
            }



    
    // SignUp PopUp
    
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



   
    // Open SignUp Modal
    
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
   
    // Closing Modal
    
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
               }}
            );
        }



    // Esacpe (ESC) key

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                hideLoginModal();

                hideSignupModal();

            }

        }
    );



    // Scroll UX

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
                }}
            );
       });

});