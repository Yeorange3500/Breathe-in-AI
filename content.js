// content.js - 随机拉伸版
document.addEventListener('click', (event) => {
  // 适配 Gemini 的发送按钮选择器
  const sendButton = event.target.closest('button[aria-label*="发送"], button[aria-label*="Send"]');
  
  if (sendButton) {
    // 1. 定义你的专属动作库
    const moves = [
      "🧘 拉伸肩颈：头向左右侧拉伸，感受颈部肌肉延展。",
      "🍑 放松臀大肌：站起来做一个深蹲，或者在座位上做‘4字拉伸’。",
      "🚶 站起来走走：去接杯水，或者在窗边远眺 30 秒。",
      "👐 扩胸运动：双手向后扩，缓解含胸驼背。",
      "👀 眨眨眼：闭眼休息 10 秒，缓解看屏幕的眼疲劳。"
    ];

    // 2. 随机抽取一个动作
    const randomMove = moves[Math.floor(Math.random() * moves.length)];

    // 3. 创建美观的浮窗
    const toast = document.createElement('div');
    toast.innerHTML = `
      <div style="font-weight: bold; margin-bottom: 5px;">💪 发送成功！来个小放松：</div>
      <div>${randomMove}</div>
    `;
    
    // 设置样式：这里用了更醒目的蓝色，符合 Gemini 的色调
    toast.style.cssText = `
      position: fixed; top: 30px; right: 30px; z-index: 10000;
      background: #1a73e8; color: white; padding: 16px 24px;
      border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.2);
      font-family: "Microsoft YaHei", sans-serif; 
      font-size: 15px; line-height: 1.5;
      max-width: 300px; transition: all 0.5s ease;
    `;
    
    document.body.appendChild(toast);

    // 4. 4秒后淡出并消失
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-20px)';
      setTimeout(() => toast.remove(), 500);
    }, 4000);
  }
}, true);