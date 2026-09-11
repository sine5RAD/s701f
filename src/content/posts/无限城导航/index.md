---
title: 无限城导航
published: 2026-09-11
description: 'A*，Dijkstra，再来一点动态规划'
image: ''
tags: ['C#', '算法']
category: '算法'
draft: false 
lang: ''
---
# 前言
第一次尝试用小说形式写博客（？
# 正文
“五红，你听说过Backroom嘛？或者说，这个世界存在Backroom嘛？”风铃草的声音从头盔的缝隙中露出来，闷闷的，被疲劳和汗水泡了一整天。防弹头盔，防弹衣还有激光冲锋枪的打扮看上去很不合时宜，但是周围的人也是一样的装束，反而显得几个街边居民楼里偷偷探出脑袋观察他们的平民像个异类。<br>
“Backroom？没听说过。是你那边的东西？”被称为五红的人对此很是好奇。<br>
“看起来世界线的变动毁掉了好多东西。”风铃草在头盔里做出微笑的表情，“我们的处境和‘后室’世界观有点像。在‘后室’世界观中，阈限空间无限延伸，我们脚下的这座城市也一样。”<br>
“为什么？”五红有些好奇。<br>
“说实话我在给这个游戏写剧情的时候没考虑过这点，不过我可以尝试解释一下...”游戏制作人用有些尴尬的声音说，他摘下头盔，享受久违的新鲜空气。<br>
一发子弹自远处的高楼上打来，他的头变成一团血雾，身躯重重地摔在地上。<br>
“啥子。”五红评价一句，启动了个人传送器。<br>
...<br>
风铃草自克隆中心走出来，让风把被营养液浸湿的头发吹干，这里有阳光，蓝天还有不带一点二氧化硫气味的空气，比刚刚那个城市好多了。<br>
“为什么要摘头盔？”转过街角，风铃草被一个熟悉的身影拦住了去路。五红依然穿着全套作战装备，这次这身装备在路人全部身穿常服或者休闲装的情况下真的特立独行了。<br>
他低着头，假装听不见，好像这里还有狙击手。<br>
“算了，反正你下次也会摘。”见风铃草没反应，她没好气地说。<br>
“银河生命无限制地使用超空间航行破坏了时间线的稳定性。”风铃草用一种仿佛在阐述预言的神圣语气回答之前那个他没来得及回答的问题。<br>
“好好说话。”五红敲了一下他的脑袋。<br>
“本来仅存在一份的东西，比如刚才那个星球，其演化的多种可能性被超空间连接到一起。”他的语气恢复了正常，知道风铃草是认真的，五红没有打岔。“这就是我们执行任务那个星球的城市无限延伸的原因。超空间不能用常识来理解。”<br>
原来如此...五红沉思着，突然想到一件重要的事：“那里面的原住民呢？他们真的死了嘛？”<br>
“你会认为重播杀人录像带是一种犯罪嘛？”<br>
“别用比喻句。”五红不理会风铃草精心包装的解释。<br>
风铃草沉默了很久才开口：“...对。你可以说他们在没和我们接触的时间线里活得好好的，但是...死了就是死了，头不会像韭菜那样再次长出来。”<br>
...<br>
任务简报：从(1217, 3954)区域(12, 10)节点取回一个U盘<br>
风铃草对照着地图，试图找到一条最短路线。他所效劳的组织探索过几十万个区域，还记录了已探索区域的道路。<br>
“我们还剩三天时间。”五红走过来，“你还没找到路嘛？”<br>
“没有。”面前的电子屏幕上，(0, 0)区域附近被他用各种颜色的笔画满了记号，每一种颜色代表着一次失败的尝试。<br>
“这样不行，我们需要一个更快的办法。”说着，五红把风铃草连同他坐着的办公椅一起推开，自己拉过来一把椅子坐下。<br>
搞什么啊...风铃草一脸不满地站起来，凑到五红边上。<br>
“我们需要设计一种算法。”五红头也不抬。<br>
“最短路？我得提醒你，380075个区域，平均一个区域45个节点，150条实数负权边。最先进的最短路算法也是$O(mlog^{2/3}(n))$，带入得到的结果是$380075 \times 150 \times 24.0^{2/3}$，一共4.75亿了...”风铃草带着嘲讽的口吻告诉五红这个数据是多么庞大。<br>
“你是不是有点问题。”五红终于受不了了，为什么设计出她的这个人如此狂妄，他难道不知道启发式搜索之类的东西嘛？“你有没有发现，我们经过区域时，大部分时间同目标点的曼哈顿距离都是减小的。”<br>
风铃草沉默了。他这个人有个优点，就是虽然不会承认错误，但是对方确实掌握真理的时候会装死。<br>
“所以说，我们可以把效用函数设为同目标点区域的曼哈顿距离，并且记录当前各点的总得分。”说着，五红快速打下一段代码：
```csharp
private static List<Vector2Int> AStarFindChunkPath(Vector2Int startChunkPos, Vector2Int targetChunkPos, Dictionary<Vector2Int, WorldMapChunk> map)
{
    // A*算法实现，返回区块路径
    var open = new List<Vector2Int>(){startChunkPos};// 待探索的区块列表
    var closed = new List<Vector2Int>();// 已探索的区块列表
    var res = new List<Vector2Int>();// 最终路径
    var cameFrom = new Dictionary<Vector2Int, Vector2Int>();// 路径前驱
    // 如果起点和终点在同一个区块，直接返回
    if (startChunkPos == targetChunkPos)
    {
        closed.Add(startChunkPos);
        return closed;
    }
    // 代价函数，目前为曼哈顿距离
    Func<Vector2Int, Vector2Int, int> h = (Vector2Int a, Vector2Int b) => Mathf.Abs(a.x - b.x) + Mathf.Abs(a.y - b.y); // 曼哈顿距离
    Dictionary<Vector2Int, int> gScore = new Dictionary<Vector2Int, int>();
    gScore[startChunkPos] = 0;
    while(open.Count > 0)
    {
```
“open那里可以用优先队列优化...”风铃草的声音听起来很小心翼翼。<br>
“闭嘴，先实现，然后优化。而且C#没有优先队列。”五红用她最不耐烦的声音讲出算法设计的金科玉律。<br>
```csharp
    // 获取当前代价最小的区块
    Vector2Int current = open.OrderBy(pos => gScore[pos] + h(pos, targetChunkPos)).First();
```
“这个地方是$O(n)$的...”看到五红掏出枪，风铃草知趣地闭了嘴。<br>
```csharp
    if(current == targetChunkPos)
    {
        // 找到路径，回溯
        while(cameFrom.ContainsKey(current))
        {
            res.Add(current);
            current = cameFrom[current];
        }
        res.Add(startChunkPos);
        res.Reverse();
        return res;
    }
```
“每次迭代之前进行检查，抵达了目标区域就直接返回。”
```csharp
    open.Remove(current);
    closed.Add(current);
    Vector2Int[] neighbors = new Vector2Int[]
    {
        new Vector2Int(current.x + 1, current.y),
        new Vector2Int(current.x - 1, current.y),
        new Vector2Int(current.x, current.y + 1),
        new Vector2Int(current.x, current.y - 1)
    };
    // 探索当前区块的邻居
    foreach(var neighbor in neighbors)
    {
        if(map.ContainsKey(neighbor) == false) continue; // 邻居区块不存在
        if(map[neighbor].Nodes == null || map[neighbor].Nodes.Count == 0) continue; // 邻居区块没有节点
        if(map[neighbor].RoadGenerated == false) continue; // 邻居区块没有生成路网
        if(closed.Contains(neighbor)) continue;
        if(!open.Contains(neighbor)) open.Add(neighbor);
        
        int tentativeGScore = gScore[current] + 1; // 每个区块的代价为1
        if(!gScore.ContainsKey(neighbor) || tentativeGScore < gScore[neighbor])
        {
            cameFrom[neighbor] = current;
            gScore[neighbor] = tentativeGScore;
        }
    }
}
```
“迭代时遍历相邻区块，把地图上记载了而且没探索过的区块全部加入open列表。然后我们就完成了，笨蛋。”<br>
风铃草还在惊叹于五红的速度，她已经开始着手写下一段。<br>
```csharp
private static void DijkstraInChunk(
    WorldMapChunkNode source,
    WorldMapChunk chunk,
    out Dictionary<WorldMapChunkNode, float> dist,
    out Dictionary<WorldMapChunkNode, WorldMapChunkNode> prev)
{
    dist = new Dictionary<WorldMapChunkNode, float> { [source] = 0f };
    prev = new Dictionary<WorldMapChunkNode, WorldMapChunkNode>();
    var unvisited = new List<WorldMapChunkNode>(chunk.Nodes.Values);
    while (unvisited.Count > 0)
    {
        // 取距离最小的未访问节点（区块节点少，线性扫描即可）
        WorldMapChunkNode u = null;
        float best = float.MaxValue;
        int bestIdx = -1;
        for (int i = 0; i < unvisited.Count; i++)
        {
            if (dist.TryGetValue(unvisited[i], out var d) && d < best)
            {
                best = d;
                u = unvisited[i];
                bestIdx = i;
            }
        }
        if (u == null) break; // 剩余节点均不可达
        unvisited.RemoveAt(bestIdx);
        foreach (var v in u.ConnectedNodes)
        {
            if (v.ChunkPosition != u.ChunkPosition) continue; // 只走区块内部道路
            float nextDist = best + Vector2.Distance(NodeGridPos(u), NodeGridPos(v));
            if (!dist.TryGetValue(v, out var cur) || nextDist < cur)
            {
                dist[v] = nextDist;
                prev[v] = u;
            }
        }
    }
}
```
风铃草张了张嘴，但还没开口就被五红阻止了。“m和n太小了，log带2/3次方的算法常数太大，而且就几十个节点你真的有必要在找dist最小值的时候在乎这点运行时开销嘛。”<br>
见风铃草无话可说了，五红满意地点了点头。“接下来，我们对每一个区块做贪心，从开始节点起，找到到达下一个区块的最短路径，以此类推...”
“局部最优解不是全局最优解。”<br>
意外地，这次五红没有怼风铃草。她低下头：“这是个好问题...”<br>
“也许我能解决这个问题。”风铃草举起手，五红站起身给他让位置。<br>
“假设第$k$个区块到第$k + 1$个区块连接了t[k]条边，$e[k][i](i∈[0, t[k] - 1])$表示第i条边的长度，$f[i][x]$表示进入第k个区块的第[x]个入口点所用的最短距离，我们还能计算出第$k$个区块第$x$个入口点到第$y$个出口点的最短距离$dis[k][x][y]$...”风铃草的眼角流露出一丝笑意。<br>
“你的意思是...”五红的声音骤然提高。<br>
“动态规划。到达第$k + 1$个区块的第$c$个节点的最短路径可以用第$k$个区块的$f[i][x]$算出来。”他开始打字。
```csharp
private static List<WorldMapChunkNode> FindRoadInChunkCorridor(
    WorldMapChunkNode startNode,
    WorldMapChunkNode targetNode,
    List<Vector2Int> chunkPath,
    Dictionary<Vector2Int, WorldMapChunk> map)
{
    // 起点终点同区块：区块内直接最短路
    if (chunkPath.Count == 1)
    {
        return DijkstraPathInChunk(startNode, targetNode, map[startNode.ChunkPosition]);
    }
    var crossLinks = new List<List<(WorldMapChunkNode exit,WorldMapChunkNode entry, float cost)>>();
    for (int i = 0; i + 1 < chunkPath.Count; i++)
    {
        var from = map[chunkPath[i]];
        Vector2Int toPos = chunkPath[i + 1];
        if (!map.ContainsKey(toPos)) return null;

        var links = new List<(WorldMapChunkNode, WorldMapChunkNode, float)>();
        foreach (var u in from.Nodes.Values)
        {
            foreach (var v in u.ConnectedNodes)
            {
                if (v.ChunkPosition == toPos)
                {
                    links.Add((u, v, Vector2.Distance(NodeGridPos(u), NodeGridPos(v))));
                }
            }
        }
        if (links.Count == 0) return null; // 该对区块之间没有跨区块道路，走廊实际断裂
        crossLinks.Add(links);
    }
```
他开始写NodeGridPos，计算区块坐标的函数
```csharp
private static Vector2 NodeGridPos(WorldMapChunkNode node)
{
    int grid = LNNBConstant.WorldConstant.区块方格数;
    return new Vector2(
        node.ChunkPosition.x * grid + node.ChunkNodePosition.x,
        node.ChunkPosition.y * grid + node.ChunkNodePosition.y);
}
```
“然后是动态规划。其实我并不怎么精于此道。”
```csharp
    for (int step = 0; step < crossLinks.Count; step++)
    {
        var chunk = map[chunkPath[step]];
        var next = new Dictionary<WorldMapChunkNode, (float, List<WorldMapChunkNode>)>();
        foreach (var (f, fData) in frontier)
        {
            // 从入口 f 出发，解出到本区块各出口的最短距离与路径
            DijkstraInChunk(f, chunk, out var dist, out var prev);
            foreach (var (exit, entry, crossCost) in crossLinks[step])
            {
                if (!dist.TryGetValue(exit, out var d)) continue; // 该出口从 f 不可达
                var seg = RebuildChunkPath(f, exit, dist, prev);
                if (seg == null) continue;
                float total = fData.cost + d + crossCost;
                var path = new List<WorldMapChunkNode>(fData.path);
                for (int s = 1; s < seg.Count; s++) path.Add(seg[s]); // seg[0]==f 已在 path 中
                path.Add(entry); // 跨区块边：出口 → 下一区块入口
                if (!next.TryGetValue(entry, out var cur) || total < cur.Item1)
                {
                    next[entry] = (total, path);
                }
            }
        }
        frontier = next;
        if (frontier.Count == 0) return null; // 本层所有入口都不可达
    }
```
“我们还需要一个能够把dijkstra找到的最短路翻译成列表的函数。”
```csharp
private static List<WorldMapChunkNode> RebuildChunkPath(
    WorldMapChunkNode source,
    WorldMapChunkNode target,
    Dictionary<WorldMapChunkNode, float> dist,
    Dictionary<WorldMapChunkNode, WorldMapChunkNode> prev)
{
    if (!dist.ContainsKey(target)) return null;
    var path = new List<WorldMapChunkNode>();
    var cur = target;
    while (true)
    {
        path.Add(cur);
        if (cur == source) break;
        cur = prev[cur];
    }
    path.Reverse();
    return path;
}
```
“最后，我们要算出入口点到导航中点的最短路径。这样就能得到全局最短路了。”<br>
“其实A*找到的区块路径里不一定有全局最短路...”五红开口了。
“...闭嘴。”这次轮到风铃草扬眉吐气。
```csharp
    var lastChunk = map[chunkPath[chunkPath.Count - 1]];
    float bestCost = float.MaxValue;
    List<WorldMapChunkNode> best = null;
    foreach (var (f, fData) in frontier)
    {
        DijkstraInChunk(f, lastChunk, out var dist, out var prev);
        if (!dist.TryGetValue(targetNode, out var d)) continue;
        var seg = RebuildChunkPath(f, targetNode, dist, prev);
        if (seg == null) continue;
        var path = new List<WorldMapChunkNode>(fData.path);
        for (int s = 1; s < seg.Count; s++) path.Add(seg[s]);
        float total = fData.cost + d;
        if (total < bestCost)
        {
            bestCost = total;
            best = path;
        }
    }
    return best;
}
```
“最后一步，我们终于可以写我们的FindRoad2Position()函数了”
```csharp
public static void FindRoad2Position(Location startLocation, Location targetLocation, out List<Location> road)
{
    if(startLocation.Scene != Location.SceneType.地表 || targetLocation.Scene != Location.SceneType.地表)
    {
        Debug.LogError("路径查找仅支持地表场景");
        road = new List<Location>();
        return;
    }
    if(startLocation.SpaceObjectId != targetLocation.SpaceObjectId)
    {
        Debug.LogError($"起始位置ID({startLocation.SpaceObjectId})与目标位置ID({targetLocation.SpaceObjectId})不一致，无法生成路径");
        Debug.LogError("不建议通过步行方式前往不同天体");
        road = new List<Location>();
        return;
    }
    Vector2Int startChunkPos = startLocation.WorldMapChunkPos;// 起点区块坐标
    Vector2Int targetChunkPos = targetLocation.WorldMapChunkPos;// 终点区块坐标
    var map = WorldMapController.Instance.ActiveChunks;
    if(!map.ContainsKey(startChunkPos) || !map.ContainsKey(targetChunkPos))
    {
        Debug.LogError("起点或终点区块未生成路网");
        road = new List<Location>();
        return;
    }
    var startChunk = map[startChunkPos];// 起点区块
    var targetChunk = map[targetChunkPos];// 终点区块
    var startNode = startChunk.Nodes[startLocation.WorldMapChunkNodePosition];// 起点节点
    var targetNode = targetChunk.Nodes[targetLocation.WorldMapChunkNodePosition];// 终点节点
    List<Vector2Int> chunkPath = AStarFindChunkPath(startChunkPos, targetChunkPos, map);// 使用A*算法查找区块路径
    if (chunkPath.Count == 0)
    {
        Debug.LogWarning($"FindRoad2Position：起点区块({startChunkPos})到终点区块({targetChunkPos})之间无区块路径");
        road = new List<Location>();
        return;
    }
    /*
    foreach (var chunkPos in chunkPath)
    {
        Debug.Log($"区块路径: {chunkPos}");
    }
    */
    // 沿区块走廊做 区块内Dijkstra + 跨区块边 + 动态规划拼接，得到完整节点路径
    List<WorldMapChunkNode> nodeRoad = FindRoadInChunkCorridor(startNode, targetNode, chunkPath, map);
    if (nodeRoad == null)
    {
        Debug.LogWarning($"FindRoad2Position：走廊({chunkPath.Count}个区块)内无连通路径（可能某对区块间缺少跨区块道路）");
        road = new List<Location>();
        return;
    }
    // 输出节点序列（含起点和终点）。注意：入队 blackboard.path 时应去掉队首（起点），否则首跳目标=当前节点会被 MoveState 拒绝
    road = nodeRoad.Select(node => node.location).ToList();
}
```
“你还挺有幽默感。”五红看到SpaceObjectId不一致的报错，不禁笑了出来。
“其实吧，我想到一个问题。”风铃草的表情带着三分严肃和七分苦笑，“现实不是游戏，我们不需要在几十毫秒内算出最短路，对于现代计算机而言，五亿次计算只需要五秒钟。我们完全可以只用dijkstra。”
“...还是有意义的。你至少学会了A*，不是嘛。”
# 后记
其实在咱的游戏里，大部分时候用Dijkstra就够了。但咱确实想练一下A*，于是有了这篇博客。