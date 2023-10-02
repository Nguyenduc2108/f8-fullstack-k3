class f8Instance {
  components = {};
  data = {};

  component(name, options) {
    this.components[name] = options;
    if (options.data) {
      this.data[name] = options.data();
    }

    customElements.define(
      name,
      class extends HTMLElement {
        connectedCallback() {
          this.render(name);
        }
      }
    );
  }

  render(name) {
    const component = this.components[name];
    if (component) {
      const element = document.querySelector(name);
      if (element) {
        let template = component.template;
        const data = this.data[name];
        if (data) {
          for (const key in data) {
            const regex = new RegExp(`{{${key}}}`, "g");
            template = template.replace(regex, data[key]);
          }
        }
        element.innerHTML = template;

        const buttons = element.querySelectorAll(
          "[v-on\\:click], [v-on\\:dblclick]"
        );
        buttons.forEach((btn) => {
          const clickAction = btn.getAttribute("v-on:click");
          const dblclickAction = btn.getAttribute("v-on:dblclick");
          if (clickAction) {
            btn.addEventListener("click", () => {
              eval(`this.data['${name}'].${clickAction}`);
              this.render(name);
            });
          }
          if (dblclickAction) {
            btn.addEventListener("dblclick", () => {
              eval(`this.data['${name}'].${dblclickAction}`);
              this.render(name);
            });
          }
        });
      }
    }
  }
}

const F8 = new f8Instance();

F8.component("custom-component", {
  data: () => ({
    message: "Hello, World!",
    count: 0,
  }),
  template: `
      <h1>{{ message }}</h1>
      <h2>Count: {{ count }}</h2>
      <button v-on:click="count--">Decrement</button>
      <button v-on:click="count++">Increment</button>
      <button v-on:dblclick="message='Hello F8'">Change Message</button>
    `,
});
