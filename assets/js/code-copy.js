document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('pre.highlight').forEach(block => {
    const button = document.createElement('button');
    button.innerText = '📋 Copy';
    button.className = 'copy-button';
    block.appendChild(button);

    button.addEventListener('click', () => {
      const code = block.querySelector('code').innerText;
      navigator.clipboard.writeText(code);
      button.innerText = '✅ Copied!';
      setTimeout(() => (button.innerText = '📋 Copy'), 2000);
    });
  });
});
