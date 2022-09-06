window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelectorAll('.button').forEach(button => {

      let getVar = variable => getComputedStyle(button).getPropertyValue(variable);
      const contactForm = document.getElementById("contact-form");

      button.addEventListener('click', e => {
        if (
          (contactForm.name.value.length < 2 || contactForm.name.value.length > 100) ||
          (contactForm.message.value.length < 3 || contactForm.message.value.length > 10000)
        ) return;

        if (!button.classList.contains('active')) {

          button.classList.add('active');

          gsap.to(button, {
            keyframes: [{
              '--left-wing-first-x': 50,
              '--left-wing-first-y': 100,
              '--right-wing-second-x': 50,
              '--right-wing-second-y': 100,
              duration: .2,
              onComplete() {
                gsap.set(button, {
                  '--left-wing-first-y': 0,
                  '--left-wing-second-x': 40,
                  '--left-wing-second-y': 100,
                  '--left-wing-third-x': 0,
                  '--left-wing-third-y': 100,
                  '--left-body-third-x': 40,
                  '--right-wing-first-x': 50,
                  '--right-wing-first-y': 0,
                  '--right-wing-second-x': 60,
                  '--right-wing-second-y': 100,
                  '--right-wing-third-x': 100,
                  '--right-wing-third-y': 100,
                  '--right-body-third-x': 60
                })
              }
            }, {
              '--left-wing-third-x': 20,
              '--left-wing-third-y': 90,
              '--left-wing-second-y': 90,
              '--left-body-third-y': 90,
              '--right-wing-third-x': 80,
              '--right-wing-third-y': 90,
              '--right-body-third-y': 90,
              '--right-wing-second-y': 90,
              duration: .2
            }, {
              '--rotate': 50,
              '--left-wing-third-y': 95,
              '--left-wing-third-x': 27,
              '--right-body-third-x': 45,
              '--right-wing-second-x': 45,
              '--right-wing-third-x': 60,
              '--right-wing-third-y': 83,
              duration: .25
            }, {
              '--rotate': 60,
              '--plane-x': -8,
              '--plane-y': 40,
              duration: .2
            }, {
              '--rotate': 40,
              '--plane-x': 45,
              '--plane-y': -300,
              '--plane-opacity': 0,
              duration: .375,
              onComplete() {
                setTimeout(() => {
                  button.removeAttribute('style');
                  gsap.fromTo(button, {
                    opacity: 0,
                    y: -8
                  }, {
                    opacity: 1,
                    y: 0,
                    clearProps: true,
                    duration: .3,
                    onComplete() {
                      button.classList.remove('active');
                    }
                  })
                }, 1800)
              }
            }]
          })

          gsap.to(button, {
            keyframes: [{
              '--text-opacity': 0,
              '--border-radius': 0,
              '--left-wing-background': getVar('--primary-dark'),
              '--right-wing-background': getVar('--primary-dark'),
              duration: .11
            }, {
              '--left-wing-background': getVar('--primary'),
              '--right-wing-background': getVar('--primary'),
              duration: .14
            }, {
              '--left-body-background': getVar('--primary-dark'),
              '--right-body-background': getVar('--primary-darkest'),
              duration: .25,
              delay: .1
            }, {
              '--trails-stroke': 171,
              duration: .22,
              delay: .22
            }, {
              '--success-opacity': 1,
              '--success-x': 0,
              duration: .2,
              delay: .15
            }, {
              '--success-stroke': 0,
              duration: .15
            }]
          })

        }
      })

    });
  }, 1000);

});
