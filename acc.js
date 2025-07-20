function getDanChoice() {
  let choices = document.getElementsByName("dan");
  for (let i = 0; i < choices.length; i++)
    if (choices[i].checked == true) return choices[i].value;
  return false;
}

function getFunctionChoice() {
  let choices = document.getElementsByName("function");
  for (let i = 0; i < choices.length; i++)
    if (choices[i].checked == true) return choices[i].value;
  return false;
}

function isSV2() {
  return document.getElementsByName("sv2")[0].checked;
}

function showInput() {
  let danChoice = getDanChoice();
  if (danChoice === false || !(danChoice in DAN_DATA)) {
    document.getElementById("info").innerHTML = "";
    document.getElementById("input").innerHTML = "";
    document.getElementById("result").innerHTML = "还未选择任何段位！( `д´)9 / 该段位没有数据！作者咕了 (`ε´ )";
    return;
  }
  let info = "曲目信息：<br><pre>";
  for (let i = 0; i < DAN_DATA[danChoice].num; i++) info += `\n${DAN_DATA[danChoice].song[i]}`;
  info += "</pre>";
  let input = "请输入（无需百分号）：<br>";
  for (let j = 1; j <= DAN_DATA[danChoice].num; j++) {
    input += getFunctionChoice() == "normal"
      ? `<input class="card" type="text" id="input_${j}" placeholder="第 ${j} 首歌结束时的 ACC">\n`
      : `<input class="card" type="text" id="input_${j}" placeholder="第 ${j} 首歌的单曲 ACC">\n`;
  }
  if ("lnote" in DAN_DATA[danChoice])
    input += `<br><label><input type="checkbox" name="sv2">启用 osu! 中的 Score v2 Mod</label>`
  input += `<br><button class="btn primary" onclick="calc()">确定并复制结果到剪贴板</button>`;
  document.getElementById("info").innerHTML = info;
  document.getElementById("input").innerHTML = input;
  document.getElementById("result").innerHTML = "";
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
  let result = "(none)";
  if (getFunctionChoice() == "normal") { // 由段位 ACC 变化计算单曲 ACC
    result = `${inputAcc[1]}`;
    for (let i = 2; i <= DAN_DATA[danChoice].num; i++) result += `-${inputAcc[i]}`;
    // 如果数据中有 LN 物量并且选中 Score v2
    if ("lnote" in DAN_DATA[danChoice] && isSV2()) result += ' (Score v2)';
    result += '\n单曲';
    for (let i = 1; i <= DAN_DATA[danChoice].num; i++) {
      let acc = (inputAcc[i] * preNoteNum[i] - inputAcc[i - 1] * preNoteNum[i - 1]) / noteNum[i];
      result += ` ${acc.toFixed(2)}`;
    }
  } else { // 由单曲 ACC 推算段位 ACC 变化
    result = "单曲";
    for (let i = 1; i <= DAN_DATA[danChoice].num; i++) result += ` ${inputAcc[i]}`;
    // 如果数据中有 LN 物量并且选中 Score v2
    if ("lnote" in DAN_DATA[danChoice] && isSV2()) result += ' (Score v2)';
    result += `\n推算 ${inputAcc[1]}0`;
    let sum = inputAcc[1] * noteNum[1];
    for (let i = 2; i <= DAN_DATA[danChoice].num; i++) {
      sum += inputAcc[i] * noteNum[i];
      result += `-${(sum / preNoteNum[i]).toFixed(2)}`;
    }
  }
  document.getElementById("result").innerHTML = result;
  navigator.clipboard.writeText(result);
}
