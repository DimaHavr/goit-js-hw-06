const CounterPlugin = function ({
  rootSelector,
  InitialValue = 0,
  step = 1,
} = {}) {
  this.value = InitialValue;
  this.step = step;
  this.refs = this.getRefs(rootSelector);
  this.bindEvents();
};

CounterPlugin.prototype.getRefs = function (rootSelector) {
  const refs = {};
  refs.container = document.querySelector(rootSelector);
  refs.incrementBtn = refs.container.querySelector('[data-action="increment"]');
  refs.decrementBtn = refs.container.querySelector('[data-action="decrement"]');
  refs.value = refs.container.querySelector("#value");

  return refs;
};

CounterPlugin.prototype.bindEvents = function () {
  this.refs.incrementBtn.addEventListener("click", () => {
    this.increment();

    this.changeValue();
    console.log(this);
  });

  this.refs.decrementBtn.addEventListener("click", () => {
    this.decrement();

    this.changeValue();
    console.log(this);
  });
};

CounterPlugin.prototype.changeValue = function () {
  this.refs.value.textContent = this.value;
};

CounterPlugin.prototype.increment = function () {
  this.value += this.step;
};

CounterPlugin.prototype.decrement = function () {
  this.value -= this.step;
};

const counter = new CounterPlugin({ rootSelector: "#counter", step: 1 });
