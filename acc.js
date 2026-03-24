"use strict";

function getDanChoice() {
  const choices = document.getElementsByName("dan");
  for (let i = 0; i < choices.length; i++)
    if (choices[i].checked == true) return choices[i].value;
  return false;
}

function getFunction() {
  return document.getElementById("function").value;
}

function isSV2() {
  return document.getElementsByName("sv2")[0].checked;
}

function calc() {
  let danChoice = getDanChoice(), noteNum = [0], inputAcc = [0], preNoteNum = [0]; // 物量的前缀和
  for (let i = 1; i <= DAN_DATA[danChoice].num; i++) noteNum[i] = DAN_DATA[danChoice].note[i - 1];
  // 如果数据中有 LN 物量并且选中 Score v2
  if ("lnote" in DAN_DATA[danChoice] && isSV2())
    for (let i = 1; i <= DAN_DATA[danChoice].num; i++) noteNum[i] += DAN_DATA[danChoice].lnote[i - 1];
  for (let i = 1; i <= DAN_DATA[danChoice].num; i++) {
    preNoteNum[i] = preNoteNum[i - 1] + noteNum[i];
    inputAcc[i] = Number(document.getElementById(`input_${i}`).value).toFixed(2);
  }
  let output = "";
  if (getFunction() == "normal") { // 由段位 ACC 变化计算单曲 ACC
    output = `${inputAcc[1]}`;
    for (let i = 2; i <= DAN_DATA[danChoice].num; i++) output += `-${inputAcc[i]}`;
    // 如果数据中有 LN 物量并且选中 Score v2
    if ("lnote" in DAN_DATA[danChoice] && isSV2()) output += ' (Score v2)';
    output += '\n单曲';
    for (let i = 1; i <= DAN_DATA[danChoice].num; i++) {
      let acc = (inputAcc[i] * preNoteNum[i] - inputAcc[i - 1] * preNoteNum[i - 1]) / noteNum[i];
      output += ` ${acc.toFixed(2)}`;
    }
  } else { // 由单曲 ACC 推算段位 ACC 变化
    output = "单曲";
    for (let i = 1; i <= DAN_DATA[danChoice].num; i++) output += ` ${inputAcc[i]}`;
    // 如果数据中有 LN 物量并且选中 Score v2
    if ("lnote" in DAN_DATA[danChoice] && isSV2()) output += ' (Score v2)';
    output += `\n推算 ${inputAcc[1]}`;
    let sum = inputAcc[1] * noteNum[1];
    for (let i = 2; i <= DAN_DATA[danChoice].num; i++) {
      sum += inputAcc[i] * noteNum[i];
      output += `-${(sum / preNoteNum[i]).toFixed(2)}`;
    }
  }
  document.getElementById("output").innerHTML = output;
  document.getElementById("tip").innerHTML = "计算结果已复制 (ゝ∀･)";
  navigator.clipboard.writeText(output);
}

function inputACC() {
  let danChoice = getDanChoice();
  if (danChoice === false || !(danChoice in DAN_DATA)) {
    document.getElementById("songInfo").innerHTML = "";
    document.getElementById("inputACC").innerHTML = "";
    document.getElementById("output").innerHTML = "还未选择任何段位！( `д´)9 / 该段位暂无数据！ (`ε´ )";
    return;
  }
  const songInfo = document.getElementById("songInfo");
  songInfo.innerHTML = "曲目信息：<br>";
  const pre = document.createElement("pre");
  for (let i = 0; i < DAN_DATA[danChoice].num; i++) {
    pre.appendChild(document.createTextNode(`${DAN_DATA[danChoice].song[i]}\n`));
  }
  songInfo.appendChild(pre);
  const inputACC = document.getElementById("inputACC");
  inputACC.innerHTML = "请输入 ACC（无需百分号）：<br>";
  for (let i = 1; i <= DAN_DATA[danChoice].num; i++) {
    const input = document.createElement("input");
    input.className = "card";
    input.type = "text";
    input.id = `input_${i}`;
    input.placeholder = getFunction() == "normal" ? `第 ${i} 首歌结束时的 ACC` : `第 ${i} 首歌的单曲 ACC`;
    inputACC.appendChild(input);
    inputACC.appendChild(document.createTextNode("\n"));
  }
  if ("lnote" in DAN_DATA[danChoice]) {
    inputACC.appendChild(document.createElement("br"));
    const label = document.createElement("label"), input = document.createElement("input");
    input.type = "checkbox";
    input.name = "sv2";
    label.appendChild(input);
    label.appendChild(document.createTextNode("启用 osu! 中的 Score v2 Mod"))
    inputACC.appendChild(label);
    inputACC.appendChild(document.createTextNode("\n"));
  }
  inputACC.appendChild(document.createElement("br"));
  const button = document.createElement("button");
  button.className = "btn primary";
  button.type = "button";
  button.onclick = calc;
  button.textContent = "确定并复制结果到剪贴板";
  inputACC.appendChild(button);
  inputACC.appendChild(document.createTextNode("\u2002"));
  const tip = document.createElement("code");
  tip.id = 'tip';
  inputACC.appendChild(tip);
  document.getElementById("output").innerHTML = "";
}
