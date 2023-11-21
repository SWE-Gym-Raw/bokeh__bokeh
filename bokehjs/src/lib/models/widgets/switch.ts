import {ToggleInput, ToggleInputView} from "./toggle_input"
import type {StyleSheetLike, Keys} from "core/dom"
import {div} from "core/dom"
import type * as p from "core/properties"
import * as switch_css from "styles/widgets/switch.css"

export class SwitchView extends ToggleInputView {
  declare model: Switch

  protected knob_el: HTMLElement
  protected bar_el: HTMLElement

  override stylesheets(): StyleSheetLike[] {
    return [...super.stylesheets(), switch_css.default]
  }

  override connect_signals(): void {
    super.connect_signals()

    this.el.addEventListener("keydown", (event) => {
      switch (event.key as Keys) {
        case "Enter":
        case " ": {
          event.preventDefault()
          this._toggle_active()
          break
        }
        default:
      }
    })
    this.el.addEventListener("click", () => this._toggle_active())
  }

  override render(): void {
    super.render()
    this.bar_el = div({class: switch_css.bar})
    this.knob_el = div({class: switch_css.knob, tabIndex: 0})
    const body_el = div({class: switch_css.body}, this.bar_el, this.knob_el)
    this._update_active()
    this._update_disabled()
    this.shadow_el.appendChild(body_el)
  }

  protected _update_active(): void {
    this.el.classList.toggle(switch_css.active, this.model.active)
  }

  protected _update_disabled(): void {
    this.el.classList.toggle(switch_css.disabled, this.model.disabled)
  }
}

export namespace Switch {
  export type Attrs = p.AttrsOf<Props>
  export type Props = ToggleInput.Props
}

export interface Switch extends Switch.Attrs {}

export class Switch extends ToggleInput {
  declare properties: Switch.Props
  declare __view_type__: SwitchView

  constructor(attrs?: Partial<Switch.Attrs>) {
    super(attrs)
  }

  static {
    this.prototype.default_view = SwitchView

    this.override<Switch.Props>({
      width: 32,
    })
  }
}
