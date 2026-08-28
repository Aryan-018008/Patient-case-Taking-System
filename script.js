// Kind and respectful warning from the Developer'side 
// Don't try to manipulate this code without the permission of Core Developer
// Resulting in which , The Asynchronous behaviour of JavaScript would change the logical and functional entity of the code
// Thanks for reading till here.



document.addEventListener("DOMContentLoaded", () => {

   
    // Lucide
    
    if (window.lucide) {
        lucide.createIcons();
    }


    // Mobile view (Hamburger later-on)
    
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuBtn && mobileMenu) {

        menuBtn.addEventListener("click", () => {

            mobileMenu.classList.toggle("hidden");

            const icon = menuBtn.querySelector("svg");

            if (icon) {

                if (mobileMenu.classList.contains("hidden")) {

                    icon.outerHTML = `
                        <i data-lucide="menu" class="w-6 h-6"></i>
                    `;

                } else {

                    icon.outerHTML = `
                        <i data-lucide="x" class="w-6 h-6"></i>
                    `;
                }

                lucide.createIcons();
            }
        });


        // Mobile CloseUp 
        const mobileLinks = mobileMenu.querySelectorAll("a");

        mobileLinks.forEach(link => {

            link.addEventListener("click", () => {
                mobileMenu.classList.add("hidden");

                const icon = menuBtn.querySelector("svg");

                if (icon) {
                    icon.outerHTML = `
                        <i data-lucide="menu" class="w-6 h-6"></i>
                    `;

                    lucide.createIcons();
                }
            });

        });
    }


    
    // Login_SignUp PopUp
    
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modalTitle");
    const closeModal = document.getElementById("closeModal");
    const demoForm = document.getElementById("demoForm");


    // Open Login / Signup PopUp
    const actionButtons = document.querySelectorAll(
        '[data-action="login"], [data-action="signup"]'
    );


    actionButtons.forEach(button => {

        button.addEventListener("click", () => {

            const action = button.dataset.action;

            if (action === "login") {

                modalTitle.textContent = "Welcome back";

            } else {

                modalTitle.textContent = "Create your account";

            }

            modal.classList.remove("hidden");

            document.body.classList.add("overflow-hidden");

            if (window.lucide) {
                lucide.createIcons();
            }

        });

    });


   
    // PopUp Closing


    function hideModal() {

        modal.classList.add("hidden");

        document.body.classList.remove("overflow-hidden");

    }


    if (closeModal) {

        closeModal.addEventListener("click", hideModal);

    }


    // Close modal when clicking outside
    if (modal) {

        modal.addEventListener("click", (event) => {

            if (event.target === modal) {

                hideModal();

            }

        });

    }


    // Close modal using ESC key
    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            hideModal();

        }

    });


    //Login Demo

    if (demoForm) {

        demoForm.addEventListener("submit", (event) => {

            event.preventDefault();


            const isLogin =
                modalTitle.textContent === "Welcome back";


            if (isLogin) {

                alert(
                    "Prototype login successful!\n\n" +
                    "Role-based dashboard will be connected later."
                );

            } else {

                alert(
                    "Prototype signup complete!\n\n" +
                    "Node.js + MongoDB backend will be connected later."
                );

            }


            hideModal();

            demoForm.reset();

        });

    }


    // Smooth Scrolling UX

    const navLinks = document.querySelectorAll(
        'a[href^="#"]'
    );


    navLinks.forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (
                targetId &&
                targetId !== "#" &&
                document.querySelector(targetId)
            ) {

                event.preventDefault();

                const target =
                    document.querySelector(targetId);

                const headerOffset = 80;

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    headerOffset;


                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });

            }

        });

    });

});