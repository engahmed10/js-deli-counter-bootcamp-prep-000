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

  return (`Currently serving ${currline.shift()}.`)
  }
  
function currentLine(currline)
  {
    if(currline.length === 0)
    {
    return "The line is currently empty."
    }else
    {
      return `The line is currently: 1. ${currline[i]}, 2. Grace`
    }
  
  
  }