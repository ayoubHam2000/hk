function rtd(radians)
{
  var pi = Math.PI;
  return radians * (180/pi);
}

function getAngle(pos, fuel)
{
	let angle = 0;
	let x = Math.abs(fuel.x - pos.x)
	let y = Math.abs(fuel.y - pos.y)
	if (y == 0 && x == 0)
		return (angle);
	angle = rtd(Math.atan(y / x))
	if (fuel.y <= pos.y)
	{
		if (fuel.x > pos.x)
			angle = 360 - angle
		else
			angle = angle + 180
	}
	else if (fuel.y > pos.y && fuel.x < pos.x)
		angle = angle + 90
	angle = angle % 360
	return (angle)
}

module.exports = {
	getAngle : getAngle,

}
