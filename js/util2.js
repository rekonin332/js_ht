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

var leftMk = [];
var rightMk = [];

let defaultPostion_X = 300;
let defaultPostion_Y = 150;

let coordinateLst = [];
let allLst = [];
let fenzhanStr = '分站';
let wangluolmokuaiStr = '网络模块';

function Generated_HT_TopoMap(pData) {
  //alert(pData);
  var _data2 =
    '192.168.101.3+|添加分站|分站|拓扑定义-添加分站|,192.168.100.203+|添加分站|分站|拓扑定义-添加分站|,192.168.100.130+|添加分站|分站|拓扑定义-添加分站|,0010000|安装位置A|大分站|拓扑定义-分站|,0020000|大分站22222|大分站|拓扑定义-分站|,192.168.101.1+|添加分站|分站|拓扑定义-添加分站|,0030000|333333|大分站|拓扑定义-分站|,192.168.101.4+|添加分站|分站|拓扑定义-添加分站|,192.168.101.2+|添加分站|分站|拓扑定义-添加分站|,192.168.101.9|添加分站|分站|拓扑定义-添加分站|,192.168.101.8|添加分站|分站|拓扑定义-添加分站|,192.168.101.3|7F.09.F6.09.7A.03|网络模块|拓扑定义-网络模块|192.168.101.9#192.168.101.3+#192.168.101.8,192.168.100.130|7F.DD.11.00.0E.08|网络模块|拓扑定义-网络模块|192.168.100.130+,192.168.100.203|7F.DD.11.00.0E.07|网络模块|拓扑定义-网络模块|192.168.100.203+,192.168.101.1|7F.09.F6.09.7A.01|网络模块|拓扑定义-网络模块|0010000#0020000#192.168.101.1+,192.168.101.2|7F.09.F6.09.7A.02|网络模块|拓扑定义-网络模块|192.168.101.2+,192.168.101.4|7F.09.F6.09.7A.04|网络模块|拓扑定义-网络模块|0030000#192.168.101.4+,7f.09.F6.09.7A.O2|101.2|交换机|拓扑定义-交换机|192.168.101.2,7f.09.F6.09.7A.O4|104|交换机|拓扑定义-交换机|192.168.101.4,7f.09.F6.09.7A.O1|101.1|交换机|拓扑定义-交换机|192.168.101.1,54-EE-75-C0-DE-DA|未定义安装位置|交换机|拓扑定义-交换机|192.168.101.3#192.168.100.130#192.168.100.203,00.00.00.00.00.00|添加交换机|交换机|拓扑定义-添加交换机|';

  var _data1 =
    '0020000|士大夫|大分站|拓扑定义-分站|,0040000|kkkk|大分站|拓扑定义-分站|,0070000|443 34其4|KJ306－F(16)H本安型分站|拓扑定义-分站|,0080000|787878787878|大分站|拓扑定义-分站|,0120000|佛挡杀佛东莞市东方|大分站|拓扑定义-分站|,0130000|45545454545|大分站|拓扑定义-分站|,0140000|aabb|大分站|拓扑定义-分站|,0150000|cc|大分站|拓扑定义-分站|,192.168.101.3|7F.09.F6.09.7A.03|网络模块|拓扑定义-网络模块|0020000#0040000#0070000#0080000#0120000#0130000#0140000#0150000,0160000|dddddd|大分站|拓扑定义-分站|,192.168.100.130+|添加分站|分站|拓扑定义-添加分站|,192.168.100.130|7F.DD.11.00.0E.08|网络模块|拓扑定义-网络模块|0160000#192.168.100.130+,0110000|东方大道多多多|大分站|拓扑定义-分站|,192.168.100.203+|添加分站|分站|拓扑定义-添加分站|,192.168.100.203|7F.DD.11.00.0E.07|网络模块|拓扑定义-网络模块|0110000#192.168.100.203+,54-EE-75-C0-DE-DA|未定义安装位置|交换机|拓扑定义-交换机|192.168.101.3#192.168.100.130#192.168.100.203,0010000|安装位置A|大分站|拓扑定义-分站|,0060000|方便的肉体和认同|大分站|拓扑定义-分站|,192.168.101.1+|添加分站|分站|拓扑定义-添加分站|,192.168.101.1|7F.09.F6.09.7A.01|网络模块|拓扑定义-网络模块|0010000#0060000#192.168.101.1+,7f.09.F6.09.7A.O1|101.1|交换机|拓扑定义-交换机|192.168.101.1,0030000|333333|大分站|拓扑定义-分站|,0050000|测试测试测试|大分站|拓扑定义-分站|,192.168.101.4+|添加分站|分站|拓扑定义-添加分站|,192.168.101.4|7F.09.F6.09.7A.04|网络模块|拓扑定义-网络模块|0030000#0050000#192.168.101.4+,7f.09.F6.09.7A.O4|104|交换机|拓扑定义-交换机|192.168.101.4,7f.DD.11.00.0E.06|刘德华|交换机|拓扑定义-交换机|192.168.100.204,0090000|烦烦烦|中分站|拓扑定义-分站|,0100000|糖糖糖|大分站|拓扑定义-分站|,192.168.100.204+|添加分站|分站|拓扑定义-添加分站|,192.168.100.204|7F.DD.11.00.0E.06|网络模块|拓扑定义-网络模块|0090000#0100000#192.168.100.204+,00.00.00.00.00.00|添加交换机|交换机|拓扑定义-添加交换机|';
  if (pData == undefined || pData.trim() == '') {
    pData = _data1;
    //alert("没有数据进来,用的假数据");
  }
  if (pData == undefined || pData.trim() == '') return;
  leftMk = [];
  rightMk = [];
  dataModel = new ht.DataModel();
  graphView = new ht.graph.GraphView(dataModel);
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

    if (data && ht.Default.isDoubleClick(e)) {
      // alert(data.getName() + ' is double clicked.');
      console.log(
        data.getToolTip(),
        data.getPosition().x,
        data.getPosition().y
      );
      // alert(data.getPosition().x + ',' + data.getPosition().y);
      // window.external.JSPointEdit(data.getToolTip());
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
    // console.log(element);
    // document.writeln(element + '<br />');
    if (
      element.indexOf('拓扑定义-添加分站') > -1 ||
      element.indexOf('拓扑定义-分站') > -1
    ) {
      _result['fz'].push(element);

      var _name = element.split('|');
      var indexName = _name[0];

      // console.log('fz', indexName + '  >>>>> ' + element);
    }
    if (
      element.indexOf('拓扑定义-交换机') > -1 ||
      element.indexOf('拓扑定义-添加交换机') > -1
    ) {
      _result['jhj'].push(element);
      var _name = element.split('|');
      var indexName = _name[0];
      var lst = _name[_name.length - 1].split('#');
      // console.log(indexName + '#' + _name[_name.length - 1] + '#');
      jhj_lst.push(indexName + '#' + _name[_name.length - 1] + '#');
    }
    if (element.indexOf('拓扑定义-网络模块') > -1) {
      _result['wl'].push(element);
      var _name = element.split('|');
      var indexName = _name[0];
      var lst = _name[_name.length - 1].split('#');
      // console.log(indexName + ',' + lst.join(',') + '#');
      wl_lst.push(indexName + ',' + lst.join(',') + '#');
    }
    allLst.push(element.trim());
  }

  jhj_str = jhj_lst.join('|');
  // console.log(jhj_str);
  //重新生成交换机-模块-分组列表
  for (let index = 0; index < wl_lst.length; index++) {
    const element = wl_lst[index];
    const mk_name = element.split(',')[0];
    jhj_str = jhj_str.replace(mk_name + '#', element);
  }
  console.log('=======');
  console.log(jhj_str);
  // console.logar);
  // GenerateTopoMap(_result);
  console.log('************GenerateTopoNew***********');
  GenerateTopoNew(jhj_str);
  //
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
  let a = GenerateSubTopo(leftLst, 100, 100, 100, 100);
  //right
  let b = GenerateSubTopo(rightLst, 700, 100, -100, 100);
  GenerateJhjToJhjLink(a, b);
}

function GenerateJhjToJhjLink(a, b) {
  let lineStyle = { 'edge.type': 'ripple' };
  for (let i = 0; i < a.length - 1; i++) {
    const jhj = a[i];
    createEdge(a[i], a[i + 1], lineStyle);
  }
  for (let i = 0; i < b.length - 1; i++) {
    const jhj = b[i];
    createEdge(b[i], b[i + 1], lineStyle);
  }
  b[0].setPosition(b[0].getPosition().x, a[0].getPosition().y); //调整坐标
  createEdge(a[0], b[0], lineStyle);
  createEdge(a[a.length - 1], b[b.length - 1], lineStyle);
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
  for (let j = 0; j < subLst.length; j++) {
    const subStr = subLst[j];
    if (subStr.startsWith('00.00.00.00.00.00')) {
      jhj_add_buttion = '00.00.00.00.00.00';
      continue;
    }
    // console.log(leftStr);
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
        //function createNode(x, y, name, toolTip, icon)
        // console.log(fz);
        let _toolTip = getToolTipByName(fz); //TODO:
        //生成分站图元
        fz_tuyuan = createNode(x, y, fz, _toolTip, fz_img);
        fenzhanNodeLst.push(fz_tuyuan);
        // console.log(x, y);
        y_total_mk += y;

        y += yOffset;
      }
      //生成模块图元
      // console.log(x, y_total_mk, m_f.length - 1);
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
      GenerateNodeToNodeLink(mk_tuyuan, fenzhanNodeLst);
      fenzhanNodeLst = [];
      mokuaiNodeLst.push(mk_tuyuan);
    }
    // console.log(j_m_f);
    // console.log('kkkkkkk', y_total_jhj, j_m_f.length - 1, mk_num);

    //生成交换机图元
    const jhj_tuyuan = createNode(
      x + xOffset * 2,
      y_total_jhj / mk_num,
      j_m_f[0],
      getToolTipByName(j_m_f[0]),
      jhj_img
    );
    GenerateNodeToNodeLink(jhj_tuyuan, mokuaiNodeLst);
    mokuaiNodeLst = [];
    returnTuyuanX.push(jhj_tuyuan);
  }
  //交换机增加按钮
  if (!!jhj_add_buttion) {
    //判定非空字符串
    //create add tuyuan
    var addNode = createNode(
      x - 200,
      y,
      jhj_add_buttion,
      '00.00.00.00.00.00|添加交换机|交换机|拓扑定义-添加交换机|'
    );
    returnTuyuanX.push(addNode);
  }

  return returnTuyuanX;
}

function GenerateNodeToNodeLink(hostNode, nodeLst, lineStyle) {
  for (let i = 0; i < nodeLst.length; i++) {
    const fz = nodeLst[i];
    lineStyle = {
      'edge.type': 'flex',
      'edge.gap': 5,
      'edge.corner.radius': 20,
    };
    createEdge(hostNode, fz, lineStyle);
  }
}
function getToolTipByName(name) {
  //TODO:
  for (let i = 0; i < allLst.length; i++) {
    const solo = allLst[i];
    if (solo.indexOf(name + '|') > -1) {
      return solo;
    }
  }
  return name;
}

function createNode(x, y, name, toolTip, icon) {
  var node = new ht.Node();

  coordinateLst.push(x + '.' + y);
  node.setPosition(x, y);
  if (icon != undefined && icon != '') {
    node.setImage(icon);
    node.setSize(40, 40 | { width: 20, height: 20 });
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
  n2.setHost(n1);
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
 
  
