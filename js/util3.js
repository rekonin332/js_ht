$(function () {
  String.prototype.endsWith = function (str) {
    if (
      str == null ||
      str == '' ||
      this.length == 0 ||
      str.length > this.length
    )
      return false;
    if (this.substring(this.length - str.length) == str) return true;
    else return false;
    return true;
  };
  String.prototype.startsWith = function (str) {
    var reg = new RegExp('^' + str);
    return reg.test(this);
  };
});

let coordinateLst = [];
let allLst = [];
let fenzhanStr = '分站';
let wangluolmokuaiStr = '网络模块';

//最后调整模块的x坐标
let leftX_lst =[];
let rightX_lst = [];

function Generated_HT_TopoMap(pData) {
  if (pData == undefined || pData.trim() == '') return;

  dataModel = new ht.DataModel();
  graphView = new ht.graph.GraphView(dataModel);
  graphView.enableToolTip(); //启用ToolTip
  graphView.fitContent(true);
  view = graphView.getView();
  view.className = 'main';
  document.body.appendChild(view);
  window.addEventListener(
    'resize',
    function (e) {
      graphView.invalidate();
    },
    false
  );

  //图元事件
  //停止默认行为
  /*    graphView.setInteractors(null);*/
  graphView.setInteractors(
    new ht.List([
      new ht.graph.ScrollBarInteractor(graphView),
      new ht.graph.SelectInteractor(graphView),
      new ht.graph.MoveInteractor(graphView),
      new ht.graph.DefaultInteractor(graphView),
      new ht.graph.TouchInteractor(graphView),
    ])
  );

  var eventType = ht.Default.isTouchable ? 'touchend' : 'mouseup';

  view.addEventListener(eventType, function (e) {
    var data = graphView.getDataAt(e);
    if (!data instanceof ht.Node) {
      console.log(data instanceof ht.Node);
      return;
    }

    if (data && ht.Default.isDoubleClick(e)) {
      if (!!data.getToolTip() && data.getToolTip().indexOf('|') > -1)
        // window.external.JSPointEdit(data.getToolTip());
      console.log(data.getPosition().x, data.getPosition().y);
    }
  });

  var _arr = pData.split(',');
  var _result = [];
  _result['fz'] = new Array();
  _result['jhj'] = new Array();
  _result['wl'] = new Array();
  wl_lst = [];
  jhj_lst = [];
  jhj_str = '';

  //分类数据
  for (let index = 0; index < _arr.length; index++) {
    const element = _arr[index];

    if (
      element.indexOf('拓扑定义-添加分站') > -1 ||
      element.indexOf('拓扑定义-分站') > -1
    ) {
      _result['fz'].push(element);

      var _name = element.split('|');
      var indexName = _name[0];
    }
    if (
      element.indexOf('拓扑定义-交换机') > -1 ||
      element.indexOf('拓扑定义-添加交换机') > -1
    ) {
      _result['jhj'].push(element);
      var _name = element.split('|');
      var indexName = _name[0];
      var lst = _name[_name.length - 1].split('#');

      jhj_lst.push(indexName + '#' + _name[_name.length - 1] + '#');
    }
    if (element.indexOf('拓扑定义-网络模块') > -1) {
      _result['wl'].push(element);
      var _name = element.split('|');
      var indexName = _name[0];
      var lst = _name[_name.length - 1].split('#');

      wl_lst.push(indexName + ',' + lst.join(',') + '#');
    }
    allLst.push(element.trim());
  }

  jhj_str = jhj_lst.join('|');

  //重新生成交换机-模块-分组列表
  for (let index = 0; index < wl_lst.length; index++) {
    const element = wl_lst[index];
    const mk_name = element.split(',')[0];
    jhj_str = jhj_str.replace(mk_name + '#', element);
  }
  console.log('=======');
  console.log(jhj_str);
  console.log('************GenerateTopoNew***********');
  GenerateTopoNew(jhj_str);
  // 最后调整模块位置
  for (let i = 0; i < leftX_lst.length; i++) {
    const node = leftX_lst[i];
        // console.log('1111', node.getX(), node.getY());
        node.setPosition(node.getX() - 25, node.getY());
        // console.log('~~1111', node.getX(), node.getY());
     
  }
  for (let i = 0; i < rightX_lst.length; i++) {
    const node = rightX_lst[i];
    // console.log('22222', node.getX(), node.getY());
    node.setPosition(node.getX() + 25, node.getY());
    // console.log('~~22222', node.getX(), node.getY());
  }  
}

function GenerateTopoNew(jhjStr) {
  var jhjStrLst = jhjStr.split('|');
  var leftLst = [];
  var rightLst = [];

  for (let i = 0; i < jhjStrLst.length; i++) {
    const jhj_mk_fz = jhjStrLst[i];
    if (i % 2 == 1) {
      leftLst.push(jhj_mk_fz);
    } else {
      rightLst.push(jhj_mk_fz);
    }
  }
  console.log('leftLst=======>', leftLst);
  console.log('rightLst=======>', rightLst);
  //left
  let a = GenerateSubTopo(leftLst, 100, 120, 100, 100);
  //right
  let b = GenerateSubTopo(rightLst, 700, 120, -100, 100);
  GenerateJhjToJhjLink(a, b);
}

function GenerateJhjToJhjLink(a, b) {
  let lineStyle = { 'edge.type': 'ripple' };

  lineStyle = { 'edge.type': 'v.h2' };
  for (let i = 0; i < a.length - 1; i++) {
    const jhj = a[i];
    createEdge(a[i], a[i + 1], lineStyle);
  }
  for (let i = 0; i < b.length - 1; i++) {
    const jhj = b[i];
    createEdge(b[i], b[i + 1], lineStyle);
  }

  //b[0].setPosition(b[0].getPosition().x, a[0].getPosition().y); //调整坐标

  // 数据接口
  // 打印机 防火墙  数据库服务器 客户端 调度电话  监控主机 调度大屏
  createStaticTuyuan(a[0], b[0]);
  //createEdge(a[0], b[0], lineStyle);
  if (a[a.length - 1].getPosition().y > b[b.length - 1].getPosition().y) {
    createEdge(b[b.length - 1], a[a.length - 1], lineStyle);
  } else {
    createEdge(a[a.length - 1], b[b.length - 1], lineStyle);
  }
  //
}

function createStaticTuyuan(node1, node2) {
  // 数据接口
  var sjjk_node = createNode(
    (node1.getPosition().x + node2.getPosition().x) / 2,
    120,
    '数据接口',
    '数据接口',
    sjjk_img
  );

  createEdge(sjjk_node, node1, { 'edge.type': 'h.v' });
  createEdge(sjjk_node, node2, { 'edge.type': 'h.v' });

  // 打印机 防火墙  数据库服务器 客户端 调度电话  监控主机 调度大屏

  //分割线
  var start_line = createNode(150, 95, '', '', '', 0.01, 0.01);
  var end_line = createNode(714, 95, '', '', '', 0.01, 0.01);
  var edge1 = createEdge(start_line, end_line).s({
    'edge.3d': true,
    'edge.width': 6,
    'edge.dash': false,

    'edge.dash.width': 4,
    'edge.dash.pattern': [8],
    'edge.type': 'points',
  });
  //打印机
  let x_position_static = 212;
  let y_position_static = 50;
  let width_offset = 70;
  img_lst = [dyj_img, fhq_img, sjk_img, khd_img, dddh_img, jkzj_img, dddp_img];
  name_lst = [
    '打印机',
    '防火墙',
    '数据库服务器',
    '客户端',
    '调度电话',
    '监控主机',
    '调度大屏',
  ];
  for (let i = 0; i < img_lst.length; i++) {
    const sgImg = img_lst[i];

    var dayinji = createNode(
      x_position_static,
      y_position_static,
      name_lst[i],
      name_lst[i],
      sgImg,
      0,
      0
    );

    x_position_static += width_offset;
  }
}

//returnTuyuanX  300 + 200 + 100 + 100
//return []
function GenerateSubTopo(tuyuanLst, initialX, initialY, xOffset, yOffset) {
  if (typeof tuyuanList != 'object' && tuyuanLst.length == 0) return;
  let x = initialX | 100;
  let y = initialY | 100;

  let subLst = tuyuanLst;
  let returnTuyuanX = [];
  let jhj_add_buttion = '';
  let temp_add_x = 0;
  for (let j = 0; j < subLst.length; j++) {
    const subStr = subLst[j];
    if (subStr.startsWith('00.00.00.00.00.00')) {
      jhj_add_buttion = '00.00.00.00.00.00';
      continue;
    }

    var j_m_f = subStr.split('#');
    let mk_num = 0;
    //j_m_f[0] 交换机名字
    let y_total_jhj = 0;
    let mokuaiNodeLst = [];
    for (let m = 1; m < j_m_f.length - 1; m++) {
      let m_f = j_m_f[m].split(',');
      if (m_f == '') continue;
      let y_total_mk = 0;
      let fenzhanNodeLst = [];
      for (let k = 1; k < m_f.length; k++) {
        const fz = m_f[k];

        let _toolTip = getToolTipByName(fz);
        //生成分站图元
        fz_tuyuan = createNode(x, y, fz, _toolTip, fz_img);
        fenzhanNodeLst.push(fz_tuyuan);

        y_total_mk += y;

        y += yOffset;
      }
      //生成模块图元
      let y_mk = y_total_mk / (m_f.length - 1);
      y_total_jhj += y_mk;
      mk_num += 1;
      const mk_tuyuan = createNode(
        x + xOffset,
        y_mk,
        m_f[0],
        getToolTipByName(m_f[0]),
        wlmk_img
      );
      GenerateNodeToNodeLink(mk_tuyuan, fenzhanNodeLst, 'fz');
      fenzhanNodeLst = [];
      mokuaiNodeLst.push(mk_tuyuan);
    }
    //生成交换机图元
    const jhj_tuyuan = createNode(
      x + xOffset * 2,
      y_total_jhj / mk_num,
      j_m_f[0],
      getToolTipByName(j_m_f[0]),
      jhj_img
    );
    //交换机到模块
    GenerateNodeToNodeLink(jhj_tuyuan, mokuaiNodeLst, 'mk', xOffset);
    mokuaiNodeLst = [];
    returnTuyuanX.push(jhj_tuyuan);

    temp_add_x = x + xOffset * 2;
  }
  //交换机增加按钮
  if (!!jhj_add_buttion) {
    //判定非空字符串
    //create add tuyuan
    var addNode = createNode(
      temp_add_x,
      y,
      jhj_add_buttion,
      '00.00.00.00.00.00|添加交换机|交换机|拓扑定义-添加交换机|'
    );
    returnTuyuanX.push(addNode);
  }

  return returnTuyuanX;
}

function GenerateNodeToNodeLink(hostNode, nodeLst, lx, xOffset) {
  if (lx == 'fz') {
    for (let i = 0; i < nodeLst.length; i++) {
      const node = nodeLst[i];
      lineStyle = { 'edge.type': 'v.h2', 'edge.gap': 0 };
      createEdge(hostNode, node, lineStyle);
      node.setHost(hostNode);
    }
  } else {
    let _joinNode_x =
      (hostNode.getPosition().x + nodeLst[0].getPosition().x) / 2;
    let _joinNode_y = hostNode.getPosition().y;
    var _joinNode = createNode(
      _joinNode_x,
      _joinNode_y,
      '',
      '',
      '',
      0.01,
      0.01
    );
    createEdge(hostNode, _joinNode, { 'edge.type': 'ortho' });
    _joinNode.setHost(hostNode);
    for (let i = 0; i < nodeLst.length; i++) {
      const node = nodeLst[i];
      lineStyle = { 'edge.type': 'v.h', 'edge.gap': 0 };
      createEdge(_joinNode, node, lineStyle);
      node.setHost(_joinNode);
      if (xOffset > 0) leftX_lst.push(_joinNode);
      else rightX_lst.push(_joinNode)
    }
  }
}

function GenerateNodeToNodeLink2(hostNode, nodeLst, lineStyle, offset) {
  if (nodeLst.length > 1) {
  } else {
    for (let i = 0; i < nodeLst.length; i++) {
      const fz = nodeLst[i];
      lineStyle = { 'edge.type': 'ortho' };
      createEdge(hostNode, fz, lineStyle);
    }
  }
}

function getToolTipByName(name) {
  for (let i = 0; i < allLst.length; i++) {
    const solo = allLst[i];
    if (solo.indexOf(name + '|') > -1) {
      return solo;
    }
  }
  return name;
}

function createNode(x, y, name, toolTip, icon, xs, ys) {
  var node = new ht.Node();

  coordinateLst.push(x + '.' + y);
  node.setPosition(x, y);
  if (!!icon) {
    node.setImage(icon);
    node.setSize(40, 40);
  }
  if (!!xs && !!ys) {
    node.setSize(xs, ys);
  }
  // name = name == '00.00.00.00.00.00' ? '+' : name;
  // name = name.endsWith('+') ? '+' : name;

  node.setName(name);
  node.setToolTip(toolTip);

  if (name == '00.00.00.00.00.00' || name.endsWith('+')) {
    node.setImage(add_img);
    node.setName('');
  }

  dataModel.add(node);
  return node;
}

function createEdge(n1, n2, typeOrStyle, name, background, fixed) {
  // n2.setHost(n1);
  var edge = new ht.Edge(n1, n2);
  if (typeof typeOrStyle == 'object') {
    edge.s(typeOrStyle);
  } else {
    edge.s('edge.type', typeOrStyle);
  }

  edge.setName(name);

  dataModel.add(edge);
  // console.log('=====> ' + n1.getToolTip());
  return edge;
}
