var _data1 = `192.168.101.3+|添加分站|分站|拓扑定义-添加分站|,
                  192.168.100.203+|添加分站|分站|拓扑定义-添加分站|,
                  192.168.100.130+|添加分站|分站|拓扑定义-添加分站|,
                  0010000|安装位置A|大分站|拓扑定义-分站|,
                  0020000|大分站22222|大分站|拓扑定义-分站|,
                  192.168.101.1+|添加分站|分站|拓扑定义-添加分站|,
                  0030000|333333|大分站|拓扑定义-分站|,
                  192.168.101.4+|添加分站|分站|拓扑定义-添加分站|,
                  192.168.101.2+|添加分站|分站|拓扑定义-添加分站|,
                  192.168.101.9|添加分站|分站|拓扑定义-添加分站|,

                  192.168.101.3|7F.09.F6.09.7A.03|网络模块|拓扑定义-网络模块|192.168.101.9#192.168.101.3+,
                  192.168.100.130|7F.DD.11.00.0E.08|网络模块|拓扑定义-网络模块|192.168.100.130+,
                  192.168.100.203|7F.DD.11.00.0E.07|网络模块|拓扑定义-网络模块|192.168.100.203+,
                  192.168.101.1|7F.09.F6.09.7A.01|网络模块|拓扑定义-网络模块|0010000#0020000#192.168.101.1+,
                  192.168.101.2|7F.09.F6.09.7A.02|网络模块|拓扑定义-网络模块|192.168.101.2+,
                  192.168.101.4|7F.09.F6.09.7A.04|网络模块|拓扑定义-网络模块|0030000#192.168.101.4+,

                  7f.09.F6.09.7A.O2|101.2|交换机|拓扑定义-交换机|192.168.101.2,
                  7f.09.F6.09.7A.O4|104|交换机|拓扑定义-交换机|192.168.101.4,
                  7f.09.F6.09.7A.O1|101.1|交换机|拓扑定义-交换机|192.168.101.1,
                  54-EE-75-C0-DE-DA|未定义安装位置|交换机|拓扑定义-交换机|192.168.101.3#192.168.100.130#192.168.100.203,
                  00.00.00.00.00.00|添加交换机|交换机|拓扑定义-添加交换机|`;

var data3 = 'test ';
var data = `192.168.101.3+|添加分站|分站|拓扑定义-添加分站|,
                  192.168.100.203+|添加分站|分站|拓扑定义-添加分站|,
                  192.168.100.130+|添加分站|分站|拓扑定义-添加分站|,
                  0010000|安装位置A|大分站|拓扑定义-分站|,
                  0020000|大分站22222|大分站|拓扑定义-分站|,
              

                  192.168.101.3|7F.09.F6.09.7A.03|网络模块|拓扑定义-网络模块|192.168.101.3+,
                  192.168.100.130|7F.DD.11.00.0E.08|网络模块|拓扑定义-网络模块|192.168.100.130+,
                  192.168.100.203|7F.DD.11.00.0E.07|网络模块|拓扑定义-网络模块|192.168.100.203+,
                  192.168.101.1|7F.09.F6.09.7A.01|网络模块|拓扑定义-网络模块|0010000#0020000#192.168.101.1+,
                  192.168.101.2|7F.09.F6.09.7A.02|网络模块|拓扑定义-网络模块|192.168.101.2+,
                  192.168.101.4|7F.09.F6.09.7A.04|网络模块|拓扑定义-网络模块|0030000#192.168.101.4+,

                  7f.09.F6.09.7A.O2|101.2|交换机|拓扑定义-交换机|192.168.101.2,
                  7f.09.F6.09.7A.O4|104|交换机|拓扑定义-交换机|192.168.101.4,
                  7f.09.F6.09.7A.O1|101.1|交换机|拓扑定义-交换机|192.168.101.1,
                  54-EE-75-C0-DE-DA|未定义安装位置|交换机|拓扑定义-交换机|192.168.101.3#192.168.100.130#192.168.100.203,
                  00.00.00.00.00.00|添加交换机|交换机|拓扑定义-添加交换机|`;

  // document.writeln(_result['fz'].length + '<br />');
  // document.writeln(_result['jhj'].length + '<br />');
  // document.writeln(_result['wl'].length + '<br />');

  var leftMk;
  var rightMk;

  var fz_img = 'res\\icon\\fz_25.png';
  var jhj_img = 'res\\icon\\switch.png';
  var wlmk_img = 'res\\icon\\swapmodule.png';

  let defaultPostion_X = 300;
  let defaultPostion_Y = 150;

  let coordinateLst = [];

  function Generated_HT_TopoMap(pData) {
    if (pData == undefined || pData.trim() == '') {
      pData = _data1;
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

    var _arr = pData.split(',');
    var _result = [];
    _result['fz'] = new Array();
    _result['jhj'] = new Array();
    _result['wl'] = new Array();
    for (let index = 0; index < _arr.length; index++) {
      const element = _arr[index];
      // console.log(element);
      // document.writeln(element + '<br />');
      if (
        element.indexOf('拓扑定义-添加分站') > -1 ||
        element.indexOf('拓扑定义-分站') > -1
      ) {
        _result['fz'].push(element);
      }
      if (
        element.indexOf('拓扑定义-交换机') > -1 ||
        element.indexOf('拓扑定义-添加交换机') > -1
      ) {
        _result['jhj'].push(element);
      }
      if (element.indexOf('拓扑定义-网络模块') > -1) {
        _result['wl'].push(element);
      }
    }

    GenerateTopoMap(_result);

    //
  }

  function GenerateTopoMap(pResult) {
    var leftArray = [];
    var rightArray = [];

    if (
      pResult != undefined &&
      pResult['jhj'] != undefined &&
      pResult['jhj'].length > 0
    ) {
      for (let index = 0; index < pResult['jhj'].length; index++) {
        const element = pResult['jhj'][index].trim();
        let bianhao = element.split('|')[0].trim();

        let _index = index;
        let a = Math.floor(_index / 2) + 1;
        let b = (_index % 2) + 1;

        if (b % 2 == 1) {
          var _node = createNode(
            defaultPostion_X * b,
            defaultPostion_Y * a,
            bianhao,
            element,
            jhj_img
          );
          leftArray.push(_node);
        } else {
          var _node = createNode(
            (defaultPostion_X - 70) * b,
            defaultPostion_Y * a,
            bianhao,
            element,
            jhj_img
          );
          rightArray.push(_node);
        }
      }
    }
    GenerateSub(leftArray, rightArray, pResult);
  }

  function createNode(x, y, name, element, icon) {
    var node = new ht.Node();
    coordinateLst.push(x + '.' + y);
    node.setPosition(x, y);
    if (icon != undefined && icon != '') {
      node.setImage(icon);
      node.setSize(30, 30 | { width: 20, height: 20 });
    }
    name = name == '00.00.00.00.00.00' ? '+' : name;
    name = name.endsWith('+') ? '+' : name;
    node.setName(name);
    node.setToolTip(element);

    dataModel.add(node);
    return node;
  }

  function createNodeAndLink(ele, lst, leftOrRigth, isPush = 0, img) {
    let cnt = 0;
    for (let mk of lst) {
      const pos = ele.getPosition();
      if (mk == '') return;
      let _node;
      var _x;
      var _y;
      if (leftOrRigth == 'left') {
        _x = pos.x - 100;
        _y = pos.y + cnt * 50;
        var coordStr = _x + '.' + _y;
        if (coordinateLst.indexOf(coordStr) > -1) {
          // 坐标上有图元了
          _y += 50;
        }

        _node = createNode(_x, _y, mk, ele.getToolTip(), img);
        if (isPush > 0) leftMk.push(_node);
      } else {
        _x = pos.x + 100;
        _y = pos.y + cnt * 50;
        var coordStr = _x + '.' + _y;
        if (coordinateLst.indexOf(coordStr) > -1) {
          // 坐标上有图元了
          _y += 50;
        }
        _node = createNode(_x, _y, mk, ele.getToolTip(), img);
        if (isPush > 0) rightMk.push(_node);
      }
      createEdge(ele, _node);
      // console.log(mk);
      cnt += 1;
    }
  }

  function createEdge(n1, n2, name, background, fixed) {
    var edge = new ht.Edge(n1, n2);
    edge.setName(name);
    edge.setStyle('edge.gap', 30);
    edge.setStyle('label.position.fixed', fixed);
    edge.setStyle('label.background', background);
    dataModel.add(edge);
    // console.log('=====> ' + n1.getToolTip());
    return edge;
  }

  function GenerateSub(leftArrayMk, rightArrayMk, _result) {
    if (
      leftArrayMk != undefined &&
      leftArrayMk.length != undefined &&
      leftArrayMk.length > 0
    ) {
      for (let index = 0; index < leftArrayMk.length - 1; index++) {
        createEdge(leftArrayMk[index], leftArrayMk[index + 1]);
      }
    }
    if (
      rightArrayMk != undefined &&
      rightArrayMk.length != undefined &&
      rightArrayMk.length > 0
    ) {
      for (let index = 0; index < rightArrayMk.length - 1; index++) {
        createEdge(rightArrayMk[index], rightArrayMk[index + 1]);
      }
    }
    if (leftArrayMk != undefined && rightArrayMk != undefined) {
      createEdge(leftArrayMk[0], rightArrayMk[0]);
      createEdge(
        leftArrayMk[leftArrayMk.length - 1],
        rightArrayMk[rightArrayMk.length - 1]
      );
    }
    //生成模块
    for (let index = 0; index < leftArrayMk.length; index++) {
      const element = leftArrayMk[index];
      var _name = element.getToolTip().split('|');

      var lst = _name[_name.length - 1].split('#');
      createNodeAndLink(element, lst, 'left', 1, wlmk_img);
    }

    for (let index = 0; index < rightArrayMk.length; index++) {
      const element = rightArrayMk[index];
      var _name = element.getToolTip().split('|');

      var lst = _name[_name.length - 1].split('#');
      createNodeAndLink(element, lst, 'right', 1, wlmk_img);
    }

    //生成分站
    console.log('==========生成分站=====');

    var mkToFz = [];
    for (let j = 0; j < _result['wl'].length; j++) {
      const wl = _result['wl'][j];
      var _name = wl.split('|');
      var lst = _name[_name.length - 1].split('#');
      //mkToFz[_name[0].trim()] = lst;
      for (let i = 0; i < leftMk.length; i++) {
        var left = leftMk[i].getName();
        if (left == _name[0].trim()) {
          // console.log(left);
          createNodeAndLink(leftMk[i], lst, 'left', 0, fz_img);
        }
      }
      for (let i = 0; i < rightMk.length; i++) {
        var right = rightMk[i].getName();
        if (right == _name[0].trim()) {
          // console.log(right);
          createNodeAndLink(rightMk[i], lst, 'right', 0, fz_img);
        }
      }
    }
    // console.log(mkToFz);
  }

function Queue(size) {
  var list = [];

  //向队列中添加数据
  this.push = function (data) {
    if (data == null) {
      return false;
    }
    //如果传递了size参数就设置了队列的大小
    if (size != null && !isNaN(size)) {
      if (list.length == size) {
        this.pop();
      }
    }
    list.unshift(data);
    return true;
  };

  //从队列中取出数据
  this.pop = function () {
    return list.pop();
  };

  //返回队列的大小
  this.size = function () {
    return list.length;
  };

  //返回队列的内容
  this.quere = function () {
    return list;
  };
}
