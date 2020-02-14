//var currline = [];
function takeANumber(currline, name)
{
  currline.push(name);
  return (`Welcome, ${name}. You are number ${(currline.length)} in line.`)
  
}
function nowServing(currline)
{
  if(currline.length === 0)
  {
    return "There is nobody waiting to be served!"
  }
  currline.shift()
  return (`Currently serving ${currline[0]}.`)
  
}