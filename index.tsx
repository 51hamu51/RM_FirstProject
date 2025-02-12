//aaabbb
//<iframe id="gameFrame" allowfullscreen width="816" height="624" src="Game.exe" sandbox="allow-same-origin allow-scripts"></iframe>

export default function sample(){
  var shell = new ActiveXObject('WSctipt.Shell');
  shell.Run('Game.exe'); 
};
