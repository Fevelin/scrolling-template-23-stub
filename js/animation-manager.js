const animatorButton = document.getElementById("animator");

animatorButton.onclick = (event) => {
   animatorButton.parentNode.classList.add("right-to-left");
   animatorButton.disabled = true;
   stopAnimatorButton.disabled = false;
}

const stopAnimatorButton = document.getElementById("stopanimator");

stopAnimatorButton.onclick = (event) => {
    stopAnimatorButton.parentNode.classList.remove("right-to-left");
    animatorButton.disabled = false;
    stopAnimatorButton.disabled = true;
}


//==================== INTERSECTION OBSERVER ==================

const options = {
    rootMargin: "0px",
    threshold: 0.1
}

const callback = (entries, observer) => {
    /**
     * This is equilent as:
     * for(let i = 0; i < entries.lenght; i++) {
     *  const entry = entries[i];
     * }
     */
    for(const entry of entries) {
        if(entry.isIntersecting) {
            entry.target.classList.add("active");
        }
        else {
            entry.target.classList.remove("active");
        }
    }
}

const observer = new IntersectionObserver (callback, options);

const targetlist = document.getElementsByClassName("observable");

for(const target of targetlist) {
    observer.observe(target);
}