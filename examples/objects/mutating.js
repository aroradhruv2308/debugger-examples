function mutating() {
  const badNames = {
    foo: function foo() {},
    bar: function() {}
  };

  let mutating = { a: 2 };
  debugger;

  mutating.a = 3;
  mutating.b = "foo";
  debugger;
}

function domElements() {
  const button = document.querySelector("button");
}

function kitchenSink() {
  const badNames = {
    foo: function foo() {},
    bar: function() {}
  };

  const bool = true;
  function fnc(a, b, c) {
    2;
  }

  const arr = [1, 2, 3];
  debugger;
}

function singleLines() {

  debugger

  for (var i=0; i<4; i++) {
    console.log("hi");
  }

  for (var z=0; z<4; z++) { console.log("hi"); }


  let x = 0;

  while(x < 4) {console.log("hi"); x++;}

  let y = 0;
  while(y < 4) {
    console.log("hi"); y++;
  }
}

function scopes() {
  const a = "a";
  const b = "b";
  const obj = { foo: "foo val" };
  obj.foo = "foo val2";

  function firstScope(c) {
    const a = "local A";
    b + b;
    obj.bar = "bar val";
    debugger;
  }

  if (true) {
    let a = "";
    b;
  }

  debugger;
  firstScope("c var");
}

function outOfScope(b) {
  const a = "bogus A";
}

function HTMLElements() {
  const button = document.querySelector("button");

  debugger;
}

function shadowing() {
  let foo = 'foo'
  let bar = 'bar'
  function inner(foo, location) {
    bar = 'bazz'
    debugger
  }

  inner('fim', 'cool');
}


function crypto() {
  window.crypto.subtle.generateKey(
  {
    name: "ECDH",
    namedCurve: "P-256", //can be "P-256", "P-384", or "P-521"
  },
  true, //whether the key is extractable (i.e. can be used in exportKey)
  ["deriveKey", "deriveBits"] //can be any combination of "deriveKey" and "deriveBits"
)
  .then(function(keys){
    debugger
    console.log('app key', keys);
    APP_PUBLIC_KEY = keys.publicKey;
    APP_PRIVATE_KEY = keys.privateKey;
  })
}
