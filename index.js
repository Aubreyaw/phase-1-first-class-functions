function receivesAFunction(somethingToCallback) {
    somethingToCallback();
}

function returnsANamedFunction() {
    function aFunctionNamed() {
      console.log('This is a named function');
    }
    return aFunctionNamed; 
  }

const returnsAnAnonymousFunction = function(){
    return function() {
        console.log('Like this?');
    };
};

returnsAnAnonymousFunction();