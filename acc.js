"use strict";

var DAN_DATA = [0];
fetch('https://uzxn.github.io/acc/data.json')
  .then(function (r) { return r.json(); })
  .then(function (d) { DAN_DATA = d; });

function getChecked(name) {
  var radio = document.getElementsByName(name);
  for (var i = 0; i < radio.length; i++) {
    if (radio[i].checked) return radio[i].value;
  }
  return null;
}

function calc() {
  var dan = DAN_DATA[getChecked('dan')];
  if (!dan) return;
  var mode = getChecked('function');
  var sv2 = document.getElementsByName('sv2')[0]
    && document.getElementsByName('sv2')[0].checked && dan.lnote;
  // 物量, 物量前缀和, 输入 ACC
  var note = [0], pre = [0], acc = [0];
  for (var i = 1; i <= dan.num; i++) {
    note[i] = dan.note[i - 1];
    if (sv2) note[i] += dan.lnote[i - 1];
    pre[i] = pre[i - 1] + note[i];
    acc[i] = Number(document.getElementById('input_' + i).value).toFixed(2);
  }
  var out = '';
  if (mode === 'normal') {
    out = acc.slice(1).join('-');
    if (sv2) out += ' (Score v2)';
    out += '\n单曲';
    for (var i = 1; i <= dan.num; i++) {
      var single = (acc[i] * pre[i] - acc[i - 1] * pre[i - 1]) / note[i];
      out += ' ' + single.toFixed(2);
    }
  } else {
    out = '单曲 ' + acc.slice(1).join(' ');
    if (sv2) out += ' (Score v2)';
    out += '\n推算';
    for (var i = 1, sum = 0; i <= dan.num; i++) {
      sum += acc[i] * note[i];
      out += (i === 1 ? ' ' : '-') + (sum / pre[i]).toFixed(2);
    }
  }
  document.getElementById('output').innerHTML = out;
  document.getElementById('tip').innerHTML = '计算结果已复制 (ゝ∀･)';
  navigator.clipboard.writeText(out);
}

function inputACC() {
  var dan = DAN_DATA[getChecked('dan')];
  if (!dan) {
    document.getElementById('songInfo').innerHTML = '';
    document.getElementById('inputACC').innerHTML = '';
    document.getElementById('output').innerHTML = '还未选择任何段位！( `д´)9 / 该段位暂无数据！(`ε´ )';
    return;
  }
  var mode = getChecked('function');
  var html = '曲目信息：<br><pre>' + dan.song.join('\n') + '</pre>';
  document.getElementById('songInfo').innerHTML = html;
  html = '请输入 ACC（无需百分号）：<br>';
  for (var i = 1; i <= dan.num; i++) {
    var hint = mode === 'normal' ? '第 ' + i + ' 首歌结束时的 ACC' : '第 ' + i + ' 首歌的单曲 ACC';
    html += '<input class="card" type="text" id="input_' + i + '" placeholder="' + hint + '">\n';
  }
  html += '<br>';
  if (dan.lnote) {
    html += '<div><label><input type="checkbox" name="sv2">启用 osu! 中的 Score v2 Mod</label></div>\n';
  }
  html += '<button class="btn primary" type="button" onclick="calc()">确定并复制结果到剪贴板</button>&ensp;<code id="tip"></code>';
  document.getElementById('inputACC').innerHTML = html;
  document.getElementById('output').innerHTML = '';
}
