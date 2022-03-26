S = 2
E = 3
O = 0
map = [
	[S, 1, 1, O, 1, 1, 1],
	[1, O, 1, 1, 1, O, 1],
	[1, O, 1, 1, 1, 1, 1],
	[1, 1, O, O, 1, 1, 1],
	[O, 1, O, E, 1, O, 1],
]

R = 5
C = 7
sr = 0
sc = 0
rq = []
cq = []

move_count = 0
nodes_left_in_layer = 1
nodes_in_next_layer = 0
reached_end = false

visited = new Array(R).fill(0).map(() => new Array(C).fill(0));

dr = [-1, 1, 0, 0]
dc = [0, 0, 1, -1]

function explore_neighbours(r, c)
{
	for (i = 0; i < 4; i++)
	{
		rr = r + dr[i]
		cc = c + dc[i]

		if (rr < 0 || cc < 0)
			continue
		if (rr >= R || cc >= C)
			continue
		if (visited[rr][cc] == 1)
			continue
		if (map[rr][cc] == O)
			continue
		rq.push(rr)
		cq.push(cc)
		visited[rr][cc] = 1
		nodes_in_next_layer++
	}
}

function solve()
{
	rq.push(sr)
	cq.push(sc)
	visited[sr][sc] = 1
	while (rq.length > 0)
	{
		r = rq.pop()
		c = cq.pop()
		if (map[r][c] == E)
		{
			reached_end = true
			break
		}
		explore_neighbours(r, c)
		nodes_left_in_layer--;
		if (nodes_left_in_layer == 0)
		{
			nodes_left_in_layer = nodes_in_next_layer
			nodes_in_next_layer = 0
			move_count++
		}
	}
	if (reached_end)
		return move_count
	return -1
}

console.log(solve())
console.log(visited)