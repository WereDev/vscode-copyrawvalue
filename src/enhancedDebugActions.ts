// import { Action } from '../node_modules/v'

// export class CopyRawValueAction extends CopyRawValueAction {
//     static readonly ID = 'workbench.debug.viewlet.action.copyValue';
// 	static LABEL = nls.localize('copyValue', "Copy Raw Value");

// 	constructor(
// 		id: string, label: string, private value: any, private context: string,
// 		@IDebugService private readonly debugService: IDebugService,
// 		@IClipboardService private readonly clipboardService: IClipboardService
// 	) {
// 		super(id, label, 'debug-action copy-value');
// 		this._enabled = typeof this.value === 'string' || (this.value instanceof Variable && !!this.value.evaluateName);
// 	}

// 	public run(): Promise<any> {
// 		const stackFrame = this.debugService.getViewModel().focusedStackFrame;
// 		const session = this.debugService.getViewModel().focusedSession;

// 		if (this.value instanceof Variable && stackFrame && session && this.value.evaluateName) {
// 			return session.evaluate(this.value.evaluateName, stackFrame.frameId, this.context).then(result => {
// 				return this.clipboardService.writeText(result.body.result);
// 			}, err => this.clipboardService.writeText(this.value.value));
// 		}


// 		return this.clipboardService.writeText(this.value);
// 	}
// }