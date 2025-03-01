function getIDLogo() {
	IDLogo = {
		facebook: 'RZPy94Bv',
		instagram: 'rm4PS4tp',
		tiktok: 'qM453zBk',
		github: 'LswWYD57',
		replit: 'hvq3MG91',
		zalo: '8P4nBNsL',
		telegram: 'QNpzCp34',
		gmail: '8Cj3z9pM',
		twitter: 'vTL2KdhF',
		discord: 'NjGSWLZN',
	}
	return IDLogo
}

setTimeout(() => {
	runModuleLogoVT()
}, 100)

function listKeysLogoVT() {
	return Object.keys(getIDLogo())
}

function runModuleLogoVT() {
	eleLogoVT = document.getElementsByTagName('vt-logo')
	if (eleLogoVT[0] != undefined) {
		for (let i = 0; i < eleLogoVT.length; i++) {
			if (!eleLogoVT[i].getAttribute('size')) {
				eleLogoVT[i].innerHTML = `<img src="https://ds-vtk.netlify.app/pic/iconApp/${eleLogoVT[i].getAttribute('name')}-300x300.png" style="height: inherit;">`
			} else {
				switch (eleLogoVT[i].getAttribute('size')) {
					case 'small':
						size = '50px'
						break
					case 'medium':
						size = '100px'
						break
					case 'large':
						size = '200px'
						break
				}
				eleLogoVT[i].innerHTML = `<img src="https://ds-vtk.netlify.app/pic/iconApp/${eleLogoVT[i].getAttribute('name')}-300x300.png" style="height: ${size};">`
			}
			eleLogoVT[i].style.display = 'flex'
			eleLogoVT[i].style.alignItems = 'center'
			eleLogoVT[i].style.justifyContent = 'center'
			console.log('Run Module Complete!')
		}
	} else {
		console.log("There are no ingredient name tags: '<vt-logo>...</vt-logo>'")
	}
}
