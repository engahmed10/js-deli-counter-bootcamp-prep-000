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
      for(var i=0 ;i<currline.length;i++)
      {
      var  line= "The line is currently:"
      line = line + ` ${i}. ${currline[i]}, `
      }
     return line
    }
  }