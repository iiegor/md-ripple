# md-ripple

> Lightweight implementation of the Material Design ripple effect

## Usage

```html
<div id="button" class="ripple-container">
  <span>buttonLabel</span>
</div>

<script type="text/javascript">
  const ripple = require('md-ripple');
  
  let button = document.getElementById('button');
  button.addEventListener('mousedown', ripple);
</script>
```

## License

MIT © [Iegor Azuaga](https://github.com/iiegor)
