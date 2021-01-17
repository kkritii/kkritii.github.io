fetch('https://api.github.com/users/kkritii').then((reponse) => reponse.json()).then(function(data) {
	console.log(data);

	let followersCount = data['followers'];
	// let followersInfo = `I have been followed by ${followersCount} awesome people on Github.`;
	document.getElementById('profileImage').src = data['avatar_url'];
	document.getElementById('fullName').textContent = data['name'];
	document.getElementById('bio').textContent = data['bio'];
    
	// document.getElementById('followersInformation').textContent = followersInfo;
	document.getElementById('follower').textContent = followersCount;
	document.getElementById('githubLink').href = data['html_url'];

	document.getElementById('mainContainer').hidden = false;
	document.getElementById('loading').hidden = true;
});
fetch('https://api.github.com/users/kkritii/repos').then((response) => response.json()).then(function(data) {
	var s = 0
	var tbody = document.createElement('tbody');
	var table = document.getElementById('repo_table')
	data.forEach(element => {
		var tr = document.createElement('tr');
		
		s++
		for( i=0; i<3; i++) {
			if(i===0){
				var td = document.createElement('td');
				td.innerHTML = s;
				tr.appendChild(td)
			}
			else if(i===1){
				var td = document.createElement('td');
				td.innerHTML = element.name;
				tr.appendChild(td)
			}
			else{
				var td = document.createElement('td');
				var aTag = document.createElement('a');
				aTag.setAttribute("href", element.html_url);
				aTag.setAttribute("target","_blank");
				aTag.innerHTML = element.html_url;
				td.appendChild(aTag);
				tr.appendChild(td)
			}
		}
		tbody.appendChild(tr);
	})
	table.appendChild(tbody);

});

