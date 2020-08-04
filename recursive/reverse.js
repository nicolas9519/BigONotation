function reverse(str){
  if(str.length <= 0) return '';
  return reverse(str.substring(1)) + str[0];
}

reverse('awesome'); // 'emosewa'
reverse('rithmschool'); // 'loohcsmhtir'