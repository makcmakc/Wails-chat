
const colors = ["#faa774", "#6ec9cb", "#7bc862", "#e17076", "#ee7aae", "#65aadd", "#9b59b6"]

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)]
}


export const avatarDefault = (user) => {
	const avatarText = user.slice(0, 1).toUpperCase()
	avatar = `<div class="avatar-default">${avatarText}</div>`
	document.querySelector('.avatar-default').style.backgroundColor = randomColor(colors);

	return avatar
}