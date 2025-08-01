// MathJax configuration for DTN SDK Documentation
window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: 'tex2jax_ignore',
    processHtmlClass: 'tex2jax_process'
  },
  svg: {
    fontCache: 'global'
  }
}; 