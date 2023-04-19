var variable_with_global_scope;
let variable_with_block_scope;
console.log(variable_with_global_scope);
const teste_2 = 'hi';
{
  var teste_global_scope = 'this is a teste';
  let teste_block_scope = 'this is a teste';
  const teste_block_scope_const = 'this is a teste';
  variable_with_global_scope = 24;
  variable_with_block_scope = 17;
  console.log(variable_with_global_scope);
  console.log(variable_with_block_scope);
  console.log(teste_2);
}

console.log(variable_with_global_scope);
console.log(variable_with_block_scope);

console.log(teste_global_scope);
console.log(teste_2);
