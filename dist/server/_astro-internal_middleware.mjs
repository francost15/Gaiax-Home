import 'es-module-lexer';
import './chunks/astro-designed-error-pages_B-JG_Df2.mjs';
import 'kleur/colors';
import './chunks/astro/server_ax9D0Zyw.mjs';
import 'clsx';
import 'cookie';
import { d as defineMiddleware, s as sequence } from './chunks/index_5TTboWV6.mjs';
import { g as getActionContext } from './chunks/server_C43ld3_1.mjs';

const onRequest$1 = defineMiddleware(async (context, next) => {
  if (context.isPrerendered) return next();
  const { action, setActionResult, serializeActionResult } = getActionContext(context);
  if (action?.calledFrom === "form") {
    const actionResult = await action.handler();
    setActionResult(action.name, serializeActionResult(actionResult));
  }
  return next();
});

const onRequest = sequence(
	
	
	onRequest$1
);

export { onRequest };
