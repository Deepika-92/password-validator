
function validatePassword(password) {
  if (password.length < 8) {
    return false
  }

  return hasLowerCaseLetter(password) && hasUpperCaseLetter(password) && hasNumber(password) && hasSymbol(password)
}
function hasLowerCaseLetter(password) {
  var letters = 'abcdefghijklmnopqrstuvwxyz'

  return password.split('').some(element => letters.includes(element))
}

function hasUpperCaseLetter(password) {
  var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  return password.split('').some(element => letters.includes(element))
}

function hasNumber(password) {
  var numbers = '0123456789'

  return password.split('').some(element => numbers.includes(element))
}

function hasSymbol(password) {
  var symbols = '!@#$%^&*'

  return password.split('').some(element => symbols.includes(element))
}

module.exports = validatePassword

