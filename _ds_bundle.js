/* @ds-bundle: {"format":4,"namespace":"NadmaiDesignSystem_0c4e36","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Tabs","sourcePath":"components/display/Tabs.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"AppointmentCard","sourcePath":"components/scheduling/AppointmentCard.jsx"},{"name":"CalendarSync","sourcePath":"components/scheduling/CalendarSync.jsx"},{"name":"MiniCalendar","sourcePath":"components/scheduling/MiniCalendar.jsx"},{"name":"ServiceOption","sourcePath":"components/scheduling/ServiceOption.jsx"},{"name":"Stepper","sourcePath":"components/scheduling/Stepper.jsx"},{"name":"TimeSlot","sourcePath":"components/scheduling/TimeSlot.jsx"}],"sourceHashes":{"components/core/Button.jsx":"b3d4bb289f9b","components/core/Icon.jsx":"3073bf8d2b7e","components/core/IconButton.jsx":"bb8b64ac4728","components/display/Avatar.jsx":"d5d114a758bd","components/display/Badge.jsx":"f65774b8d2d0","components/display/Card.jsx":"0c88d2a0b4b4","components/display/Tabs.jsx":"f6317a377f11","components/display/Tag.jsx":"27000626bcb8","components/feedback/Dialog.jsx":"b49a53bd9d6c","components/feedback/Toast.jsx":"a5f3d8d605fa","components/feedback/Tooltip.jsx":"aed3c5483e0b","components/forms/Checkbox.jsx":"5f31c07b92a7","components/forms/Input.jsx":"a70eddf741dc","components/forms/Radio.jsx":"81b4db64f1c7","components/forms/Select.jsx":"61efbd261567","components/forms/Switch.jsx":"7e139e4c17cb","components/forms/Textarea.jsx":"d33f092a8ea6","components/scheduling/AppointmentCard.jsx":"40c43799047f","components/scheduling/CalendarSync.jsx":"f89ad4c485f5","components/scheduling/MiniCalendar.jsx":"924a2766a43d","components/scheduling/ServiceOption.jsx":"f8ccd2e54079","components/scheduling/Stepper.jsx":"5b867dbf7580","components/scheduling/TimeSlot.jsx":"542eb9323d13","supabase/config.example.js":"748ae8bf2357","supabase/functions/gcal-sync/index.ts":"274be57d9747","supabase/functions/google-oauth/index.ts":"eb89847a8f69","ui_kits/admin/AppointmentDialog.jsx":"1c9b9b2d6b0d","ui_kits/admin/CalendarScreen.jsx":"99ddb2a605d5","ui_kits/admin/ListScreen.jsx":"3d4fc7259345","ui_kits/admin/SettingsScreen.jsx":"c9ba09570a24","ui_kits/admin/Sidebar.jsx":"65b07a5415cb","ui_kits/admin/WeekCalendar.jsx":"0d7a3363a7df","ui_kits/admin/data.js":"3be19ebcef4c","ui_kits/booking/BookingShell.jsx":"096aacdcbb2b","ui_kits/booking/ConfirmedStep.jsx":"476f1d242fb4","ui_kits/booking/DateTimeStep.jsx":"ac8e68190615","ui_kits/booking/DetailsStep.jsx":"138fa630020c","ui_kits/booking/ReviewStep.jsx":"c619b896519a","ui_kits/booking/ShopStep.jsx":"8fce22008165","ui_kits/booking/data.js":"7d987c431d24"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NadmaiDesignSystem_0c4e36 = window.NadmaiDesignSystem_0c4e36 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Icon.jsx
try { (() => {
const BASE = 'https://unpkg.com/lucide-static@0.460.0/icons/';
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  style,
  label
}) {
  const url = 'url(' + BASE + name + '.svg)';
  return /*#__PURE__*/React.createElement("span", {
    role: label ? 'img' : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    style: {
      display: 'inline-block',
      flex: 'none',
      width: size,
      height: size,
      background: color,
      WebkitMask: url + ' center/contain no-repeat',
      mask: url + ' center/contain no-repeat',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const SIZES = {
  sm: {
    h: 'var(--control-sm)',
    px: 12,
    fs: 'var(--text-sm)',
    ic: 16
  },
  md: {
    h: 'var(--control-md)',
    px: 16,
    fs: 'var(--text-sm)',
    ic: 18
  },
  lg: {
    h: 'var(--control-lg)',
    px: 22,
    fs: 'var(--text-md)',
    ic: 20
  }
};
const V = {
  primary: {
    bg: 'var(--action-primary)',
    hv: 'var(--action-primary-hover)',
    pr: 'var(--action-primary-press)',
    fg: 'var(--text-on-brand)',
    bd: 'transparent'
  },
  secondary: {
    bg: 'var(--action-secondary)',
    hv: 'var(--action-secondary-hover)',
    pr: 'var(--stone-100)',
    fg: 'var(--text-strong)',
    bd: 'var(--border-default)'
  },
  ghost: {
    bg: 'transparent',
    hv: 'var(--action-ghost-hover)',
    pr: 'var(--stone-200)',
    fg: 'var(--text-body)',
    bd: 'transparent'
  },
  danger: {
    bg: 'var(--action-danger)',
    hv: 'var(--action-danger-hover)',
    pr: 'var(--red-700)',
    fg: '#fff',
    bd: 'transparent'
  },
  soft: {
    bg: 'var(--surface-brand-soft)',
    hv: 'var(--teal-100)',
    pr: 'var(--teal-200)',
    fg: 'var(--text-brand)',
    bd: 'transparent'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth,
  disabled,
  loading,
  children,
  onClick,
  type = 'button',
  style
}) {
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  const s = SIZES[size],
    v = V[variant];
  const off = disabled || loading;
  const bg = off ? variant === 'ghost' ? 'transparent' : 'var(--stone-100)' : p ? v.pr : h ? v.hv : v.bg;
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: off,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: s.h,
      padding: '0 ' + s.px + 'px',
      font: 'var(--weight-medium) ' + s.fs + '/1 var(--font-sans)',
      color: off ? 'var(--text-disabled)' : v.fg,
      background: bg,
      border: '1px solid ' + (off ? 'transparent' : v.bd),
      borderRadius: 'var(--radius-md)',
      cursor: off ? 'not-allowed' : 'pointer',
      transition: 'background var(--duration-fast) var(--ease-out), transform var(--duration-fast)',
      transform: p && !off ? 'scale(.98)' : 'none',
      boxShadow: variant === 'secondary' && !off ? 'var(--shadow-xs)' : 'none',
      whiteSpace: 'nowrap',
      ...style
    }
  }, loading ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "loader-circle",
    size: s.ic,
    style: {
      animation: 'nm-spin 0.9s linear infinite'
    }
  }) : iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.ic
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.ic
  }), /*#__PURE__*/React.createElement("style", null, '@keyframes nm-spin{to{transform:rotate(360deg)}}'));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  label,
  size = 'md',
  variant = 'ghost',
  onClick,
  disabled,
  active
}) {
  const [h, setH] = React.useState(false);
  const d = {
    sm: 32,
    md: 40,
    lg: 48
  }[size];
  const ic = {
    sm: 16,
    md: 20,
    lg: 22
  }[size];
  const bg = active ? 'var(--surface-brand-soft)' : variant === 'secondary' ? h ? 'var(--stone-50)' : '#fff' : h ? 'var(--action-ghost-hover)' : 'transparent';
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: d,
      height: d,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-md)',
      padding: 0,
      cursor: disabled ? 'not-allowed' : 'pointer',
      background: bg,
      color: disabled ? 'var(--text-disabled)' : active ? 'var(--text-brand)' : 'var(--text-muted)',
      border: variant === 'secondary' ? '1px solid var(--border-default)' : '1px solid transparent',
      transition: 'background var(--duration-fast)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: ic
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function Avatar({
  name = '',
  src,
  size = 36,
  color = 'var(--teal-100)',
  ink = 'var(--teal-800)'
}) {
  const init = name.trim().split(/\s+/).map(s => s[0]).slice(0, 2).join('');
  return /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: size,
      height: size,
      borderRadius: '50%',
      overflow: 'hidden',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: color,
      color: ink,
      font: 'var(--weight-semibold) ' + Math.round(size * 0.38) + 'px/1 var(--font-sans)'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : init);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
const T = {
  neutral: ['var(--surface-sunken)', 'var(--text-muted)', 'var(--stone-400)'],
  brand: ['var(--surface-brand-soft)', 'var(--text-brand)', 'var(--teal-500)'],
  success: ['var(--status-success-soft)', 'var(--status-success-ink)', 'var(--status-success)'],
  warning: ['var(--status-warning-soft)', 'var(--status-warning-ink)', 'var(--status-warning)'],
  danger: ['var(--status-danger-soft)', 'var(--status-danger-ink)', 'var(--status-danger)'],
  info: ['var(--status-info-soft)', 'var(--status-info-ink)', 'var(--status-info)'],
  accent: ['var(--marigold-100)', 'var(--marigold-700)', 'var(--marigold-500)']
};
function Badge({
  tone = 'neutral',
  dot,
  children
}) {
  const [bg, fg, d] = T[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 22,
      padding: '0 8px',
      borderRadius: 'var(--radius-full)',
      background: bg,
      color: fg,
      font: 'var(--weight-medium) var(--text-xs)/1 var(--font-sans)',
      whiteSpace: 'nowrap'
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: d
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function Card({
  children,
  padding = 20,
  elevated,
  interactive,
  selected,
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      padding,
      border: '1px solid ' + (selected ? 'var(--border-brand)' : interactive && h ? 'var(--border-strong)' : 'var(--border-default)'),
      boxShadow: selected ? '0 0 0 1px var(--border-brand)' : elevated ? 'var(--shadow-md)' : interactive && h ? 'var(--shadow-sm)' : 'var(--shadow-xs)',
      cursor: interactive ? 'pointer' : undefined,
      transition: 'border-color var(--duration-fast),box-shadow var(--duration-fast)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = 'underline'
}) {
  const [inner, setInner] = React.useState(defaultValue ?? (items[0] && (items[0].value ?? items[0])));
  const cur = value ?? inner;
  const seg = variant === 'segmented';
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'inline-flex',
      gap: seg ? 2 : 20,
      padding: seg ? 3 : 0,
      background: seg ? 'var(--surface-sunken)' : 'transparent',
      borderRadius: seg ? 'var(--radius-md)' : 0,
      borderBottom: seg ? 0 : '1px solid var(--border-default)'
    }
  }, items.map(it => {
    const v = typeof it === 'string' ? {
      value: it,
      label: it
    } : it;
    const on = v.value === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: v.value,
      role: "tab",
      "aria-selected": on,
      onClick: () => {
        setInner(v.value);
        onChange && onChange(v.value);
      },
      style: seg ? {
        height: 30,
        padding: '0 14px',
        border: 0,
        borderRadius: 'var(--radius-sm)',
        cursor: 'pointer',
        background: on ? 'var(--surface-card)' : 'transparent',
        boxShadow: on ? 'var(--shadow-xs)' : 'none',
        font: 'var(--type-label)',
        color: on ? 'var(--text-strong)' : 'var(--text-muted)'
      } : {
        height: 40,
        padding: 0,
        border: 0,
        background: 'none',
        cursor: 'pointer',
        marginBottom: -1,
        borderBottom: '2px solid ' + (on ? 'var(--action-primary)' : 'transparent'),
        font: 'var(--type-label)',
        color: on ? 'var(--text-strong)' : 'var(--text-muted)',
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, v.label, v.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 11px/1 var(--font-mono)',
        color: 'var(--text-subtle)',
        background: 'var(--surface-sunken)',
        padding: '3px 6px',
        borderRadius: 10
      }
    }, v.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function Tag({
  children,
  color,
  icon,
  onRemove
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 28,
      padding: '0 10px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      font: 'var(--weight-medium) var(--text-xs)/1 var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, color && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 2,
      background: color
    }
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14,
    color: "var(--text-subtle)"
  }), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "remove",
    style: {
      display: 'flex',
      border: 0,
      background: 'none',
      padding: 0,
      cursor: 'pointer',
      color: 'var(--text-subtle)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  description,
  children,
  footer,
  onClose,
  width = 440,
  inline
}) {
  if (!open) return null;
  const panel = /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      width,
      maxWidth: 'calc(100vw - 32px)',
      background: 'var(--surface-raised)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)',
      animation: 'nm-fade-up var(--duration-slow) var(--ease-out)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      padding: '20px 20px 0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      paddingTop: 4
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-h3)',
      color: 'var(--text-strong)'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      marginTop: 6
    }
  }, description)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "\u0E1B\u0E34\u0E14",
    size: "sm",
    onClick: onClose
  })), children && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 24px 0'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      padding: '20px 24px 24px'
    }
  }, footer), !footer && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 24
    }
  }));
  if (inline) return panel;
  return /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    },
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      background: 'var(--overlay-scrim)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      animation: 'nm-fade var(--duration-base)'
    }
  }, panel);
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const T = {
  success: ['circle-check-big', 'var(--green-500)'],
  info: ['info', 'var(--teal-300)'],
  warning: ['triangle-alert', 'var(--marigold-300)'],
  danger: ['circle-alert', '#E9806E'],
  sync: ['calendar-check', 'var(--teal-300)']
};
function Toast({
  tone = 'success',
  title,
  description,
  action,
  onAction,
  onClose
}) {
  const [ic, c] = T[tone];
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      width: 360,
      maxWidth: '100%',
      padding: '14px 14px 14px 16px',
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      animation: 'nm-fade-up var(--duration-slow) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ic,
    size: 20,
    color: c,
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--stone-300)',
      marginTop: 3
    }
  }, description)), action && /*#__PURE__*/React.createElement("button", {
    onClick: onAction,
    style: {
      border: 0,
      background: 'none',
      color: 'var(--teal-200)',
      font: 'var(--type-label)',
      cursor: 'pointer',
      padding: '0 4px'
    }
  }, action), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "\u0E1B\u0E34\u0E14",
    style: {
      border: 0,
      background: 'none',
      color: 'var(--stone-400)',
      cursor: 'pointer',
      padding: 0,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children,
  placement = 'top',
  open
}) {
  const [h, setH] = React.useState(false);
  const show = open ?? h;
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 6px)'
  } : {
    bottom: 'calc(100% + 6px)'
  };
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      ...pos,
      whiteSpace: 'nowrap',
      padding: '6px 8px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      font: 'var(--type-caption)',
      boxShadow: 'var(--shadow-md)',
      zIndex: 60,
      pointerEvents: 'none',
      animation: 'nm-fade var(--duration-fast)'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  description,
  checked,
  defaultChecked,
  onChange,
  disabled
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked ?? inner;
  const toggle = () => {
    if (disabled) return;
    setInner(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    onClick: e => {
      e.preventDefault();
      toggle();
    },
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "checkbox",
    "aria-checked": on,
    tabIndex: 0,
    onKeyDown: e => {
      if (e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    },
    style: {
      flex: 'none',
      width: 20,
      height: 20,
      marginTop: 1,
      borderRadius: 'var(--radius-xs)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: on ? 'var(--action-primary)' : 'var(--surface-card)',
      border: '1.5px solid ' + (on ? 'var(--action-primary)' : 'var(--border-strong)'),
      transition: 'all var(--duration-fast)'
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-strong)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-subtle)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Field({
  label,
  hint,
  error,
  required,
  children,
  htmlFor
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--status-danger)'
    }
  }, " *")), children, (error || hint) && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: error ? 'var(--status-danger)' : 'var(--text-subtle)'
    }
  }, error || hint));
}
function Input({
  label,
  hint,
  error,
  required,
  iconLeft,
  placeholder,
  value,
  defaultValue,
  onChange,
  type = 'text',
  disabled,
  id,
  size = 'md'
}) {
  const [f, setF] = React.useState(false);
  const h = {
    sm: 'var(--control-sm)',
    md: 'var(--control-md)',
    lg: 'var(--control-lg)'
  }[size];
  return /*#__PURE__*/React.createElement(Field, {
    label: label,
    hint: hint,
    error: error,
    required: required,
    htmlFor: id
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: h,
      padding: '0 12px',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: '1px solid ' + (error ? 'var(--status-danger)' : f ? 'var(--border-focus)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-md)',
      boxShadow: f ? error ? '0 0 0 3px rgba(194,65,45,.2)' : 'var(--focus-ring)' : 'none',
      transition: 'border-color var(--duration-fast),box-shadow var(--duration-fast)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: 18,
    color: "var(--text-subtle)"
  }), /*#__PURE__*/React.createElement("input", {
    id: id,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 0,
      background: 'transparent',
      font: 'var(--type-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-strong)',
      padding: 0,
      height: '100%'
    }
  })));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  name,
  options = [],
  value,
  defaultValue,
  onChange,
  direction = 'column'
}) {
  const [inner, setInner] = React.useState(defaultValue);
  const cur = value ?? inner;
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'row' ? 20 : 10
    }
  }, options.map(o => {
    const v = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    const on = cur === v.value;
    return /*#__PURE__*/React.createElement("label", {
      key: v.value,
      onClick: () => {
        setInner(v.value);
        onChange && onChange(v.value);
      },
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'flex-start',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("span", {
      role: "radio",
      "aria-checked": on,
      style: {
        flex: 'none',
        width: 20,
        height: 20,
        marginTop: 1,
        borderRadius: '50%',
        border: '1.5px solid ' + (on ? 'var(--action-primary)' : 'var(--border-strong)'),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fff'
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: '50%',
        background: 'var(--action-primary)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-body-sm)',
        color: 'var(--text-strong)'
      }
    }, v.label), v.description && /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-caption)',
        color: 'var(--text-subtle)'
      }
    }, v.description)));
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  defaultValue,
  onChange,
  id,
  disabled,
  iconLeft
}) {
  const [f, setF] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      height: 'var(--control-md)',
      background: 'var(--surface-card)',
      border: '1px solid ' + (f ? 'var(--border-focus)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-md)',
      boxShadow: f ? 'var(--focus-ring)' : 'none'
    }
  }, iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: 18,
    color: "var(--text-subtle)",
    style: {
      position: 'absolute',
      left: 12,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("select", {
    id: id,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      flex: 1,
      height: '100%',
      border: 0,
      outline: 0,
      background: 'transparent',
      padding: '0 36px 0 ' + (iconLeft ? 38 : 12) + 'px',
      font: 'var(--type-body-sm)',
      color: 'var(--text-strong)',
      cursor: 'pointer'
    }
  }, options.map(o => {
    const v = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v.value,
      value: v.value
    }, v.label);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    color: "var(--text-subtle)",
    style: {
      position: 'absolute',
      right: 12,
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  description,
  checked,
  defaultChecked,
  onChange,
  disabled
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked ?? inner;
  const t = () => {
    if (disabled) return;
    setInner(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      opacity: disabled ? .5 : 1
    }
  }, (label || description) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-strong)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-subtle)'
    }
  }, description)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": on,
    onClick: t,
    style: {
      flex: 'none',
      width: 40,
      height: 24,
      padding: 2,
      border: 0,
      borderRadius: 'var(--radius-full)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      background: on ? 'var(--action-primary)' : 'var(--stone-300)',
      transition: 'background var(--duration-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transform: on ? 'translateX(16px)' : 'none',
      transition: 'transform var(--duration-base) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function Textarea({
  label,
  hint,
  placeholder,
  value,
  defaultValue,
  onChange,
  rows = 3,
  id
}) {
  const [f, setF] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", {
    id: id,
    rows: rows,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      resize: 'vertical',
      padding: '10px 12px',
      font: 'var(--type-body-sm)',
      color: 'var(--text-strong)',
      background: 'var(--surface-card)',
      outline: 0,
      border: '1px solid ' + (f ? 'var(--border-focus)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-md)',
      boxShadow: f ? 'var(--focus-ring)' : 'none'
    }
  }), hint && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-subtle)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/scheduling/AppointmentCard.jsx
try { (() => {
const ST = {
  confirmed: ['success', 'ยืนยันแล้ว'],
  pending: ['warning', 'รอยืนยัน'],
  ready: ['info', 'พร้อมรับ'],
  cancelled: ['danger', 'ยกเลิก'],
  completed: ['neutral', 'เสร็จสิ้น']
};
function AppointmentCard({
  service,
  dateLabel,
  time,
  customer,
  staff,
  location,
  status = 'confirmed',
  statusLabel,
  staffIcon = 'user-round',
  synced = true,
  color = 'var(--event-teal)',
  compact,
  onClick,
  actions
}) {
  const [tone, l0] = ST[status];
  const lbl = statusLabel || l0;
  const Row = ({
    icon,
    children
  }) => /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15,
    color: "var(--text-subtle)"
  }), children);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: 'flex',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      cursor: onClick ? 'pointer' : undefined,
      boxShadow: 'var(--shadow-xs)',
      opacity: status === 'cancelled' ? .7 : 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      width: compact ? 72 : 84,
      padding: '14px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2,
      background: 'var(--surface-sunken)',
      borderRight: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-subtle)'
    }
  }, dateLabel), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-time)',
      fontSize: compact ? 16 : 18,
      color: 'var(--text-strong)'
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      padding: compact ? '12px 14px' : '14px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 2,
      background: color,
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-title)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-strong)',
      flex: 1,
      minWidth: 0,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      textDecoration: status === 'cancelled' ? 'line-through' : 'none'
    }
  }, service), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: tone,
    dot: true
  }, lbl)), !compact && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '4px 16px'
    }
  }, customer && /*#__PURE__*/React.createElement(Row, {
    icon: "user"
  }, customer), staff && /*#__PURE__*/React.createElement(Row, {
    icon: staffIcon
  }, staff), location && /*#__PURE__*/React.createElement(Row, {
    icon: "map-pin"
  }, location)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      font: 'var(--type-caption)',
      color: synced ? 'var(--text-brand)' : 'var(--status-warning-ink)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: synced ? 'calendar-check' : 'calendar-clock',
    size: 14
  }), synced ? 'อยู่ใน Google Calendar' : 'รอซิงก์'), actions)));
}
Object.assign(__ds_scope, { AppointmentCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/scheduling/AppointmentCard.jsx", error: String((e && e.message) || e) }); }

// components/scheduling/CalendarSync.jsx
try { (() => {
const S = {
  connected: ['var(--status-success)', 'เชื่อมต่อแล้ว'],
  syncing: ['var(--teal-400)', 'กำลังซิงก์…'],
  error: ['var(--status-danger)', 'ซิงก์ไม่สำเร็จ'],
  disconnected: ['var(--stone-400)', 'ยังไม่ได้เชื่อมต่อ']
};
function CalendarSync({
  status = 'connected',
  account,
  calendarName = 'นัดหมาย',
  lastSync,
  onConnect,
  onDisconnect
}) {
  const [c, lbl] = S[status];
  const on = status !== 'disconnected';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px 16px',
      background: 'var(--surface-card)',
      border: '1px solid ' + (status === 'error' ? 'var(--red-500)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-lg)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-brand-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "calendar-check",
    size: 22,
    color: "var(--text-brand)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--type-label)',
      color: 'var(--text-strong)'
    }
  }, "Google Calendar", /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: c
    }
  }), lbl)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-subtle)',
      marginTop: 3,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, on ? account + ' · ปฏิทิน “' + calendarName + '”' + (lastSync ? ' · ' + lastSync : '') : 'เชื่อมต่อเพื่อเพิ่มนัดลงปฏิทินอัตโนมัติ')), status === 'disconnected' && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    iconLeft: "link",
    onClick: onConnect
  }, "\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D"), status === 'error' && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "secondary",
    iconLeft: "refresh-cw",
    onClick: onConnect
  }, "\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07"), (status === 'connected' || status === 'syncing') && onDisconnect && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "ghost",
    onClick: onDisconnect
  }, "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E01\u0E32\u0E23\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D"));
}
Object.assign(__ds_scope, { CalendarSync });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/scheduling/CalendarSync.jsx", error: String((e && e.message) || e) }); }

// components/scheduling/MiniCalendar.jsx
try { (() => {
const TH_MONTHS = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
const TH_DOW = ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'];
const iso = (y, m, d) => y + '-' + String(m + 1).padStart(2, '0') + '-' + String(d).padStart(2, '0');
function MiniCalendar({
  month,
  value,
  onChange,
  today,
  closedWeekdays = [],
  minDate,
  markedDates = []
}) {
  const init = (month || value || today || new Date().toISOString().slice(0, 10)).slice(0, 7);
  const [ym, setYm] = React.useState(init);
  const [y, m] = ym.split('-').map(Number);
  const mi = m - 1;
  const first = new Date(y, mi, 1).getDay();
  const days = new Date(y, mi + 1, 0).getDate();
  const shift = d => {
    const t = new Date(y, mi + d, 1);
    setYm(t.getFullYear() + '-' + String(t.getMonth() + 1).padStart(2, '0'));
  };
  const cells = [];
  for (let i = 0; i < first; i++) cells.push(null);
  for (let d = 1; d <= days; d++) cells.push(d);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      minWidth: 260
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-title)',
      color: 'var(--text-strong)'
    }
  }, TH_MONTHS[mi], " ", y + 543), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "chevron-left",
    label: "\u0E40\u0E14\u0E37\u0E2D\u0E19\u0E01\u0E48\u0E2D\u0E19",
    size: "sm",
    onClick: () => shift(-1)
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "chevron-right",
    label: "\u0E40\u0E14\u0E37\u0E2D\u0E19\u0E16\u0E31\u0E14\u0E44\u0E1B",
    size: "sm",
    onClick: () => shift(1)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7,1fr)',
      gap: 2
    }
  }, TH_DOW.map(d => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      textAlign: 'center',
      font: 'var(--type-caption)',
      color: 'var(--text-subtle)',
      padding: '6px 0'
    }
  }, d)), cells.map((d, i) => {
    if (!d) return /*#__PURE__*/React.createElement("div", {
      key: i
    });
    const k = iso(y, mi, d);
    const dow = (first + d - 1) % 7;
    const off = closedWeekdays.includes(dow) || minDate && k < minDate;
    const sel = k === value;
    const isT = k === today;
    const mark = markedDates.includes(k);
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      disabled: off,
      onClick: () => onChange && onChange(k),
      style: {
        position: 'relative',
        height: 40,
        border: 0,
        borderRadius: 'var(--radius-md)',
        cursor: off ? 'default' : 'pointer',
        background: sel ? 'var(--slot-selected)' : 'transparent',
        color: sel ? '#fff' : off ? 'var(--text-disabled)' : 'var(--text-strong)',
        font: (sel || isT ? '600 ' : '400 ') + 'var(--text-sm)/1 var(--font-sans)',
        textDecoration: off && !sel ? 'line-through' : 'none',
        textDecorationColor: 'var(--stone-300)',
        transition: 'background var(--duration-fast)'
      },
      onMouseEnter: e => {
        if (!sel && !off) e.currentTarget.style.background = 'var(--surface-brand-soft)';
      },
      onMouseLeave: e => {
        if (!sel) e.currentTarget.style.background = 'transparent';
      }
    }, d, (isT || mark) && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: '50%',
        bottom: 5,
        transform: 'translateX(-50%)',
        width: 4,
        height: 4,
        borderRadius: '50%',
        background: sel ? '#fff' : isT ? 'var(--today)' : 'var(--teal-400)'
      }
    }));
  })));
}
Object.assign(__ds_scope, { MiniCalendar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/scheduling/MiniCalendar.jsx", error: String((e && e.message) || e) }); }

// components/scheduling/ServiceOption.jsx
try { (() => {
function ServiceOption({
  title,
  description,
  duration,
  price,
  color = 'var(--event-teal)',
  selected,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    "aria-pressed": selected,
    style: {
      width: '100%',
      textAlign: 'left',
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      padding: '14px 16px',
      background: selected ? 'var(--surface-brand-soft)' : 'var(--surface-card)',
      cursor: 'pointer',
      border: '1px solid ' + (selected ? 'var(--border-brand)' : h ? 'var(--border-strong)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-lg)',
      boxShadow: selected ? '0 0 0 1px var(--border-brand)' : 'none',
      transition: 'all var(--duration-fast)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 10,
      height: 40,
      borderRadius: 'var(--radius-full)',
      background: color
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-title)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-strong)'
    }
  }, title), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      lineHeight: 1.45
    }
  }, description), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 12,
      font: 'var(--type-caption)',
      color: 'var(--text-subtle)',
      marginTop: 2
    }
  }, duration && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "clock",
    size: 13
  }), duration), price && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 12px/1.3 var(--font-mono)',
      color: 'var(--text-body)'
    }
  }, price))), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 22,
      height: 22,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: selected ? 'var(--action-primary)' : 'transparent',
      border: selected ? 0 : '1.5px solid var(--border-strong)'
    }
  }, selected && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    color: "#fff"
  })));
}
Object.assign(__ds_scope, { ServiceOption });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/scheduling/ServiceOption.jsx", error: String((e && e.message) || e) }); }

// components/scheduling/Stepper.jsx
try { (() => {
function Stepper({
  steps = [],
  current = 0
}) {
  return /*#__PURE__*/React.createElement("ol", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, steps.map((s, i) => {
    const done = i < current,
      on = i === current;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("li", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        font: '600 12px/1 var(--font-mono)',
        background: done || on ? 'var(--action-primary)' : 'var(--surface-sunken)',
        color: done || on ? '#fff' : 'var(--text-subtle)',
        boxShadow: on ? '0 0 0 4px var(--teal-100)' : 'none'
      }
    }, done ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check",
      size: 14
    }) : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-label)',
        color: on ? 'var(--text-strong)' : done ? 'var(--text-body)' : 'var(--text-subtle)'
      }
    }, s)), i < steps.length - 1 && /*#__PURE__*/React.createElement("li", {
      "aria-hidden": true,
      style: {
        flex: 1,
        minWidth: 12,
        height: 2,
        borderRadius: 1,
        background: done ? 'var(--action-primary)' : 'var(--border-default)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/scheduling/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/scheduling/TimeSlot.jsx
try { (() => {
function TimeSlot({
  time,
  selected,
  disabled,
  onClick,
  note
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    "aria-pressed": selected,
    style: {
      height: 44,
      minWidth: 84,
      padding: '0 12px',
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 1,
      background: selected ? 'var(--slot-selected)' : disabled ? 'var(--slot-unavailable)' : h ? 'var(--surface-brand-soft)' : 'var(--slot-available)',
      border: '1px solid ' + (selected ? 'var(--slot-selected)' : disabled ? 'transparent' : h ? 'var(--teal-300)' : 'var(--border-default)'),
      color: selected ? '#fff' : disabled ? 'var(--text-disabled)' : 'var(--text-strong)',
      transition: 'all var(--duration-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-time)',
      fontSize: 15,
      textDecoration: disabled ? 'line-through' : 'none'
    }
  }, time), note && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      fontSize: 10,
      color: selected ? 'var(--teal-100)' : 'var(--marigold-600)'
    }
  }, note));
}
Object.assign(__ds_scope, { TimeSlot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/scheduling/TimeSlot.jsx", error: String((e && e.message) || e) }); }

// supabase/config.example.js
try { (() => {
// Copy to supabase-config.js (gitignored) and fill in from Supabase → Project Settings → API
window.NADMAI_SUPABASE = {
  url: "https://YOUR-PROJECT.supabase.co",
  anonKey: "YOUR-ANON-KEY"
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "supabase/config.example.js", error: String((e && e.message) || e) }); }

// supabase/functions/gcal-sync/index.ts
try { (() => {
// Supabase Edge Function: sync pickups → Google Calendar
// Trigger: Database Webhook on public.pickups (INSERT, UPDATE) → POST this function.
// Secrets: GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, WEBHOOK_SECRET (SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY are built in)
const SB_URL = Deno.env.get("SUPABASE_URL");
const SB_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const SBH = {
  apikey: SB_KEY,
  authorization: "Bearer " + SB_KEY,
  "content-type": "application/json"
};
// Minimal PostgREST helpers (no npm deps)
async function dbGet(path) {
  const r = await fetch(SB_URL + "/rest/v1/" + path, {
    headers: SBH
  });
  return r.ok ? await r.json() : [];
}
async function dbPatch(table, filter, body) {
  await fetch(SB_URL + "/rest/v1/" + table + "?" + filter, {
    method: "PATCH",
    headers: SBH,
    body: JSON.stringify(body)
  });
}
async function dbUpsert(table, onConflict, body) {
  await fetch(SB_URL + "/rest/v1/" + table + "?on_conflict=" + onConflict, {
    method: "POST",
    headers: {
      ...SBH,
      prefer: "resolution=merge-duplicates"
    },
    body: JSON.stringify(body)
  });
}
const STATUS_TH = {
  pending: "รอเตรียม",
  ready: "พร้อมรับ",
  completed: "รับแล้ว",
  cancelled: "ยกเลิก"
};
async function accessToken(refresh) {
  const r = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      client_id: Deno.env.get("GOOGLE_CLIENT_ID"),
      client_secret: Deno.env.get("GOOGLE_CLIENT_SECRET"),
      refresh_token: refresh,
      grant_type: "refresh_token"
    })
  });
  if (!r.ok) throw new Error("token: " + (await r.text()));
  return (await r.json()).access_token;
}
Deno.serve(async req => {
  if (req.headers.get("x-webhook-secret") !== Deno.env.get("WEBHOOK_SECRET")) return new Response("forbidden", {
    status: 403
  });
  const {
    type,
    record: p,
    old_record: old
  } = await req.json();
  if (!p) return new Response("no record");
  // ignore our own write-back
  if (type === "UPDATE" && old && old.status === p.status && old.starts_at === p.starts_at && old.item === p.item) return new Response("skip");
  const [shop] = await dbGet(`shops?id=eq.${p.shop_id}&select=*`);
  const [conn] = await dbGet(`google_connections?or=(shop_id.eq.${p.shop_id},shop_id.is.null)&order=shop_id.nullslast&limit=1&select=*`);
  if (!shop || !conn) return new Response("no shop/connection", {
    status: 200
  });
  const calId = encodeURIComponent(shop.google_calendar_id || "primary");
  const base = `https://www.googleapis.com/calendar/v3/calendars/${calId}/events`;
  try {
    const token = await accessToken(conn.refresh_token);
    const H = {
      authorization: "Bearer " + token,
      "content-type": "application/json"
    };
    let eventId = p.gcal_event_id;
    if (p.status === "cancelled" && eventId) {
      await fetch(`${base}/${eventId}?sendUpdates=all`, {
        method: "DELETE",
        headers: H
      });
      eventId = null;
    } else if (p.status !== "cancelled") {
      const body = {
        summary: `รับสินค้า: ${p.item} · ${p.customer_name}`,
        location: shop.address ?? shop.name,
        description: [`ร้าน: ${shop.name}`, p.order_no ? `คำสั่งซื้อ: #${p.order_no}` : null, `รหัสรับสินค้า: ${p.pickup_code}`, `สถานะ: ${STATUS_TH[p.status]}`, `โทร: ${p.customer_phone}`, p.note ? `หมายเหตุ: ${p.note}` : null].filter(Boolean).join("\n"),
        start: {
          dateTime: p.starts_at,
          timeZone: shop.timezone
        },
        end: {
          dateTime: p.ends_at,
          timeZone: shop.timezone
        },
        attendees: p.add_to_customer_calendar && p.customer_email ? [{
          email: p.customer_email,
          displayName: p.customer_name
        }] : [],
        reminders: {
          useDefault: false,
          overrides: [{
            method: "popup",
            minutes: p.remind_minutes
          }]
        },
        colorId: p.status === "ready" ? "7" : p.status === "completed" ? "8" : undefined
      };
      const r = await fetch(eventId ? `${base}/${eventId}?sendUpdates=all` : `${base}?sendUpdates=all`, {
        method: eventId ? "PATCH" : "POST",
        headers: H,
        body: JSON.stringify(body)
      });
      if (!r.ok) throw new Error("calendar: " + (await r.text()));
      eventId = (await r.json()).id;
    }
    await dbPatch("pickups", `id=eq.${p.id}`, {
      gcal_event_id: eventId,
      gcal_synced_at: new Date().toISOString(),
      gcal_error: null
    });
    return new Response("ok");
  } catch (e) {
    await dbPatch("pickups", `id=eq.${p.id}`, {
      gcal_error: String(e)
    });
    return new Response(String(e), {
      status: 500
    });
  }
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "supabase/functions/gcal-sync/index.ts", error: String((e && e.message) || e) }); }

// supabase/functions/google-oauth/index.ts
try { (() => {
// One-time Google connect: GET /google-oauth?shop_id=<uuid>  → redirects to Google consent
// Google redirects back to the same URL with ?code=… → stores refresh token.
// Secrets: GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, OAUTH_REDIRECT_URL (= this function's public URL), APP_URL
const SB_URL = Deno.env.get("SUPABASE_URL");
const SB_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const SBH = {
  apikey: SB_KEY,
  authorization: "Bearer " + SB_KEY,
  "content-type": "application/json"
};
// Minimal PostgREST helpers (no npm deps)
async function dbGet(path) {
  const r = await fetch(SB_URL + "/rest/v1/" + path, {
    headers: SBH
  });
  return r.ok ? await r.json() : [];
}
async function dbPatch(table, filter, body) {
  await fetch(SB_URL + "/rest/v1/" + table + "?" + filter, {
    method: "PATCH",
    headers: SBH,
    body: JSON.stringify(body)
  });
}
async function dbUpsert(table, onConflict, body) {
  await fetch(SB_URL + "/rest/v1/" + table + "?on_conflict=" + onConflict, {
    method: "POST",
    headers: {
      ...SBH,
      prefer: "resolution=merge-duplicates"
    },
    body: JSON.stringify(body)
  });
}
Deno.serve(async req => {
  const url = new URL(req.url);
  const redirect = Deno.env.get("OAUTH_REDIRECT_URL");
  const code = url.searchParams.get("code");
  if (!code) {
    const q = new URLSearchParams({
      client_id: Deno.env.get("GOOGLE_CLIENT_ID"),
      redirect_uri: redirect,
      response_type: "code",
      access_type: "offline",
      prompt: "consent",
      include_granted_scopes: "true",
      scope: "https://www.googleapis.com/auth/calendar.events openid email",
      state: url.searchParams.get("shop_id") ?? ""
    });
    return Response.redirect("https://accounts.google.com/o/oauth2/v2/auth?" + q, 302);
  }
  const r = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      code,
      client_id: Deno.env.get("GOOGLE_CLIENT_ID"),
      client_secret: Deno.env.get("GOOGLE_CLIENT_SECRET"),
      redirect_uri: redirect,
      grant_type: "authorization_code"
    })
  });
  const t = await r.json();
  if (!t.refresh_token) return new Response("No refresh token returned", {
    status: 400
  });
  const email = JSON.parse(atob(t.id_token.split(".")[1])).email;
  const shopId = url.searchParams.get("state") || null;
  await dbUpsert("google_connections", "shop_id", {
    shop_id: shopId,
    google_email: email,
    refresh_token: t.refresh_token
  });
  return Response.redirect((Deno.env.get("APP_URL") ?? "/") + "?google=connected", 302);
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "supabase/functions/google-oauth/index.ts", error: String((e && e.message) || e) }); }

// ui_kits/admin/AppointmentDialog.jsx
try { (() => {
function AppointmentDialog({
  appt,
  onClose,
  onUpdate
}) {
  const {
    Dialog,
    Button,
    Badge,
    Icon,
    Avatar
  } = window.NadmaiDesignSystem_0c4e36;
  const D = window.AD_DATA;
  if (!appt) return null;
  const day = D.week[appt.day];
  const shop = D.shops[appt.shop];
  const tone = {
    pending: 'warning',
    ready: 'info',
    completed: 'neutral',
    cancelled: 'danger'
  }[appt.status];
  const R = ({
    i,
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 17,
    color: "var(--text-subtle)"
  }), children);
  const set = s => {
    onUpdate({
      ...appt,
      status: s,
      synced: true
    });
    onClose();
  };
  const closed = appt.status === 'cancelled' || appt.status === 'completed';
  return /*#__PURE__*/React.createElement(Dialog, {
    title: appt.item,
    onClose: onClose,
    width: 480,
    footer: closed ? /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: onClose
    }, "\u0E1B\u0E34\u0E14") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => set('cancelled'),
      style: {
        marginRight: 'auto',
        color: 'var(--status-danger)'
      }
    }, "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E19\u0E31\u0E14\u0E23\u0E31\u0E1A"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconLeft: "calendar-clock"
    }, "\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E40\u0E27\u0E25\u0E32"), appt.status === 'pending' ? /*#__PURE__*/React.createElement(Button, {
      iconLeft: "package-check",
      onClick: () => set('ready')
    }, "\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E23\u0E31\u0E1A") : /*#__PURE__*/React.createElement(Button, {
      iconLeft: "check",
      onClick: () => set('completed')
    }, "\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32\u0E23\u0E31\u0E1A\u0E41\u0E25\u0E49\u0E27"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: tone,
    dot: true
  }, D.statusLabel[appt.status]), appt.synced ? /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "\u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19 Google Calendar") : /*#__PURE__*/React.createElement(Badge, {
    tone: "warning"
  }, "\u0E23\u0E2D\u0E0B\u0E34\u0E07\u0E01\u0E4C")), /*#__PURE__*/React.createElement(R, {
    i: "store"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 2,
      background: shop.color
    }
  }), shop.name), appt.order && /*#__PURE__*/React.createElement(R, {
    i: "receipt"
  }, "\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D ", /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 13px var(--font-mono)'
    }
  }, "#", appt.order)), /*#__PURE__*/React.createElement(R, {
    i: "calendar"
  }, day.d, " ", day.n, " \u0E1E\u0E24\u0E28\u0E08\u0E34\u0E01\u0E32\u0E22\u0E19 2569"), /*#__PURE__*/React.createElement(R, {
    i: "clock"
  }, "\u0E23\u0E31\u0E1A\u0E0A\u0E48\u0E27\u0E07 ", /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-time)',
      fontSize: 14
    }
  }, appt.start, "\u2013", window.AD_END(appt.start, appt.mins))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-subtle)',
      margin: '4px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: appt.customer,
    size: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-strong)'
    }
  }, appt.customer), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, appt.phone, appt.email ? ' · ' + appt.email : '')), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-subtle)'
    }
  }, "\u0E23\u0E2B\u0E31\u0E2A\u0E23\u0E31\u0E1A"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 20px/1.1 var(--font-mono)',
      letterSpacing: '0.1em',
      color: 'var(--text-strong)'
    }
  }, appt.code)))));
}
window.AppointmentDialog = AppointmentDialog;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/AppointmentDialog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/CalendarScreen.jsx
try { (() => {
function CalendarScreen({
  appts,
  onOpen,
  onNew
}) {
  const {
    Button,
    IconButton,
    Tabs,
    Tag
  } = window.NadmaiDesignSystem_0c4e36;
  const D = window.AD_DATA;
  const [hide, setHide] = React.useState([]);
  const tog = k => setHide(hide.includes(k) ? hide.filter(x => x !== k) : [...hide, k]);
  const shown = appts.filter(a => !hide.includes(a.shop));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: "9 \u2013 15 \u0E1E.\u0E22. 2569",
    sub: shown.filter(a => a.status !== 'cancelled').length + ' นัดรับในสัปดาห์นี้ · ซิงก์กับ Google Calendar แล้ว'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron-left",
    label: "\u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C\u0E01\u0E48\u0E2D\u0E19",
    variant: "secondary"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron-right",
    label: "\u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C\u0E16\u0E31\u0E14\u0E44\u0E1B",
    variant: "secondary"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49"), /*#__PURE__*/React.createElement(Tabs, {
    variant: "segmented",
    items: ['วัน', 'สัปดาห์', 'เดือน'],
    defaultValue: "\u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C"
  }), /*#__PURE__*/React.createElement(Button, {
    iconLeft: "plus",
    onClick: onNew
  }, "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E19\u0E31\u0E14\u0E23\u0E31\u0E1A")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      padding: '10px 28px',
      borderBottom: '1px solid var(--border-default)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-subtle)',
      marginRight: 4
    }
  }, "\u0E23\u0E49\u0E32\u0E19\u0E04\u0E49\u0E32"), Object.entries(D.shops).map(([k, s]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => tog(k),
    style: {
      border: 0,
      background: 'none',
      padding: 0,
      cursor: 'pointer',
      opacity: hide.includes(k) ? .4 : 1
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    color: s.color
  }, s.short))), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 14,
      font: 'var(--type-caption)',
      color: 'var(--text-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u0E40\u0E2A\u0E49\u0E19\u0E1B\u0E23\u0E30 = \u0E23\u0E2D\u0E40\u0E15\u0E23\u0E35\u0E22\u0E21"), /*#__PURE__*/React.createElement("span", null, "\u0E40\u0E17\u0E32 = \u0E23\u0E31\u0E1A\u0E41\u0E25\u0E49\u0E27"))), /*#__PURE__*/React.createElement(WeekCalendar, {
    appts: shown,
    onOpen: onOpen
  }));
}
window.CalendarScreen = CalendarScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/CalendarScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/ListScreen.jsx
try { (() => {
function ListScreen({
  appts,
  onOpen,
  onUpdate
}) {
  const {
    Tabs,
    Input,
    AppointmentCard,
    Button
  } = window.NadmaiDesignSystem_0c4e36;
  const D = window.AD_DATA;
  const [tab, setTab] = React.useState('p');
  const by = {
    p: a => a.status === 'pending',
    r: a => a.status === 'ready',
    d: a => a.status === 'completed',
    c: a => a.status === 'cancelled'
  };
  const list = appts.filter(by[tab]);
  const dl = a => D.week[a.day].d + ' ' + D.week[a.day].n + ' พ.ย.';
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TopBar, {
    title: "\u0E19\u0E31\u0E14\u0E23\u0E31\u0E1A",
    sub: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E19\u0E31\u0E14\u0E23\u0E31\u0E1A\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E17\u0E38\u0E01\u0E23\u0E49\u0E32\u0E19"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 260
    }
  }, /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    iconLeft: "search",
    placeholder: "\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E0A\u0E37\u0E48\u0E2D \u0E40\u0E1A\u0E2D\u0E23\u0E4C \u0E2B\u0E23\u0E37\u0E2D\u0E23\u0E2B\u0E31\u0E2A\u0E23\u0E31\u0E1A"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: "download"
  }, "\u0E2A\u0E48\u0E07\u0E2D\u0E2D\u0E01")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 28px',
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      value: 'p',
      label: 'รอเตรียม',
      count: appts.filter(by.p).length
    }, {
      value: 'r',
      label: 'พร้อมรับ',
      count: appts.filter(by.r).length
    }, {
      value: 'd',
      label: 'รับแล้ว'
    }, {
      value: 'c',
      label: 'ยกเลิก'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 28px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      maxWidth: 820
    }
  }, list.map(a => /*#__PURE__*/React.createElement(AppointmentCard, {
    key: a.id,
    service: a.item + (a.order ? ' · #' + a.order : ''),
    dateLabel: dl(a),
    time: a.start,
    customer: a.customer,
    staff: D.shops[a.shop].name,
    staffIcon: "store",
    status: a.status,
    statusLabel: D.statusLabel[a.status],
    synced: a.synced,
    color: D.shops[a.shop].color,
    onClick: () => onOpen(a),
    actions: a.status === 'pending' ? /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "soft",
      iconLeft: "package-check",
      onClick: e => {
        e.stopPropagation();
        onUpdate({
          ...a,
          status: 'ready',
          synced: true
        });
      }
    }, "\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E23\u0E31\u0E1A") : a.status === 'ready' ? /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "soft",
      iconLeft: "check",
      onClick: e => {
        e.stopPropagation();
        onUpdate({
          ...a,
          status: 'completed'
        });
      }
    }, "\u0E23\u0E31\u0E1A\u0E41\u0E25\u0E49\u0E27") : null
  })), !list.length && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40,
      textAlign: 'center',
      font: 'var(--type-body-sm)',
      color: 'var(--text-subtle)'
    }
  }, "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E19\u0E31\u0E14\u0E23\u0E31\u0E1A\u0E43\u0E19\u0E2B\u0E21\u0E27\u0E14\u0E19\u0E35\u0E49")));
}
window.ListScreen = ListScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/ListScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/SettingsScreen.jsx
try { (() => {
function SettingsScreen({
  sync,
  setSync
}) {
  const {
    CalendarSync,
    Card,
    Switch,
    Select,
    Input
  } = window.NadmaiDesignSystem_0c4e36;
  const Sec = ({
    t,
    d,
    children
  }) => /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '240px minmax(0,1fr)',
      gap: 32,
      padding: '24px 0',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-title)',
      color: 'var(--text-strong)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, d)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, children));
  const days = ['จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์', 'อาทิตย์'];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TopBar, {
    title: "\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32",
    sub: "\u0E01\u0E32\u0E23\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E41\u0E25\u0E30\u0E40\u0E27\u0E25\u0E32\u0E17\u0E33\u0E01\u0E32\u0E23"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 28px',
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement(Sec, {
    t: "Google Calendar",
    d: "\u0E19\u0E31\u0E14\u0E23\u0E31\u0E1A\u0E43\u0E2B\u0E21\u0E48 \u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19 \u0E41\u0E25\u0E30\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01 \u0E08\u0E30\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E15\u0E43\u0E19\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E42\u0E14\u0E22\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34"
  }, /*#__PURE__*/React.createElement(CalendarSync, {
    status: sync,
    account: "pickup@nadmai.app",
    lastSync: sync === 'connected' ? 'ซิงก์ล่าสุด 2 นาทีที่แล้ว' : undefined,
    onConnect: () => {
      setSync('syncing');
      setTimeout(() => setSync('connected'), 1200);
    },
    onDisconnect: () => setSync('disconnected')
  }), /*#__PURE__*/React.createElement(Card, {
    padding: 16,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      opacity: sync === 'disconnected' ? .5 : 1
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E19\u0E31\u0E14\u0E23\u0E31\u0E1A\u0E43\u0E2B\u0E21\u0E48\u0E25\u0E07\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34",
    description: "\u0E2A\u0E23\u0E49\u0E32\u0E07 event \u0E17\u0E31\u0E19\u0E17\u0E35\u0E17\u0E35\u0E48\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "\u0E2A\u0E48\u0E07\u0E04\u0E33\u0E40\u0E0A\u0E34\u0E0D\u0E43\u0E2B\u0E49\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32",
    description: "\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32\u0E08\u0E30\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E19\u0E31\u0E14\u0E23\u0E31\u0E1A\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E23\u0E2B\u0E31\u0E2A\u0E43\u0E19 Google Calendar \u0E02\u0E2D\u0E07\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "\u0E41\u0E22\u0E01\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E15\u0E32\u0E21\u0E23\u0E49\u0E32\u0E19",
    description: "\u0E41\u0E15\u0E48\u0E25\u0E30\u0E23\u0E49\u0E32\u0E19\u0E21\u0E35\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E02\u0E2D\u0E07\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07\u0E43\u0E19 Google Calendar"
  })), /*#__PURE__*/React.createElement(Select, {
    label: "\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E1B\u0E25\u0E32\u0E22\u0E17\u0E32\u0E07",
    iconLeft: "calendar",
    options: ['นัดรับสินค้า · ทุกร้าน', 'ปฏิทินหลัก']
  })), /*#__PURE__*/React.createElement(Sec, {
    t: "\u0E40\u0E27\u0E25\u0E32\u0E40\u0E1B\u0E34\u0E14\u0E23\u0E31\u0E1A\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32",
    d: "\u0E0A\u0E48\u0E27\u0E07\u0E40\u0E27\u0E25\u0E32\u0E17\u0E35\u0E48\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E21\u0E32\u0E23\u0E31\u0E1A\u0E44\u0E14\u0E49"
  }, days.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      display: 'grid',
      gridTemplateColumns: '120px 140px 1fr',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: d,
    defaultChecked: true
  }), true ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-time)',
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, "10:00 \u2013 20:00") : /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-disabled)'
    }
  }, "\u0E1B\u0E34\u0E14"), /*#__PURE__*/React.createElement("span", null)))), /*#__PURE__*/React.createElement(Sec, {
    t: "\u0E01\u0E32\u0E23\u0E19\u0E31\u0E14\u0E23\u0E31\u0E1A",
    d: "\u0E01\u0E0E\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E31\u0E14\u0E23\u0E31\u0E1A\u0E2A\u0E32\u0E18\u0E32\u0E23\u0E13\u0E30"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "\u0E0A\u0E48\u0E27\u0E07\u0E23\u0E31\u0E1A\u0E15\u0E48\u0E2D\u0E04\u0E34\u0E27",
    options: ['15 นาที', '30 นาที', '1 ชั่วโมง'],
    defaultValue: "30 \u0E19\u0E32\u0E17\u0E35"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "\u0E40\u0E01\u0E47\u0E1A\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E44\u0E27\u0E49\u0E43\u0E2B\u0E49\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E27\u0E25\u0E32\u0E19\u0E31\u0E14",
    options: ['3 ชั่วโมง', '24 ชั่วโมง', '3 วัน'],
    defaultValue: "24 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E31\u0E14\u0E23\u0E31\u0E1A",
    iconLeft: "link",
    defaultValue: "nadmai.app/pickup"
  }))));
}
window.SettingsScreen = SettingsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/SettingsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/Sidebar.jsx
try { (() => {
function Sidebar({
  route,
  onRoute,
  pending
}) {
  const {
    Icon,
    Avatar,
    Badge
  } = window.NadmaiDesignSystem_0c4e36;
  const items = [['calendar', 'calendar-days', 'ปฏิทินรับสินค้า'], ['list', 'package', 'นัดรับ', pending], ['shops', 'store', 'ร้านค้า'], ['customers', 'users', 'ลูกค้า'], ['settings', 'settings', 'ตั้งค่า']];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 'var(--sidebar-width)',
      flex: 'none',
      background: 'var(--surface-card)',
      borderRight: '1px solid var(--border-default)',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      position: 'sticky',
      top: 0,
      boxSizing: 'border-box',
      padding: '18px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 20px/1 var(--font-sans)',
      color: 'var(--text-strong)',
      padding: '4px 10px 22px',
      letterSpacing: '-0.01em'
    }
  }, "\u0E19\u0E31\u0E14\u0E23\u0E31\u0E1A\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, items.map(([k, ic, l, c]) => {
    const on = route === k;
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: () => onRoute(k),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        height: 40,
        padding: '0 10px',
        border: 0,
        borderRadius: 'var(--radius-md)',
        cursor: 'pointer',
        textAlign: 'left',
        background: on ? 'var(--surface-brand-soft)' : 'transparent',
        color: on ? 'var(--teal-800)' : 'var(--text-body)',
        font: 'var(--type-label)'
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.background = 'var(--stone-50)';
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 20,
      color: on ? 'var(--text-brand)' : 'var(--text-subtle)'
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, l), c ? /*#__PURE__*/React.createElement(Badge, {
      tone: "warning"
    }, c) : null);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '10px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--stone-50)',
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--status-success)'
    }
  }), "Google Calendar \xB7 \u0E0B\u0E34\u0E07\u0E01\u0E4C\u0E41\u0E25\u0E49\u0E27"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '0 6px'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Pickup Point",
    size: 32
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-strong)'
    }
  }, "\u0E1C\u0E39\u0E49\u0E14\u0E39\u0E41\u0E25\u0E08\u0E38\u0E14\u0E23\u0E31\u0E1A"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-subtle)'
    }
  }, "4 \u0E23\u0E49\u0E32\u0E19\u0E04\u0E49\u0E32")))));
}
function TopBar({
  title,
  sub,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '18px 28px',
      borderBottom: '1px solid var(--border-default)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: 'var(--type-h3)',
      color: 'var(--text-strong)'
    }
  }, title), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-subtle)',
      marginTop: 2
    }
  }, sub)), children);
}
Object.assign(window, {
  Sidebar,
  TopBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/WeekCalendar.jsx
try { (() => {
function WeekCalendar({
  appts,
  onOpen
}) {
  const {
    Icon
  } = window.NadmaiDesignSystem_0c4e36;
  const D = window.AD_DATA;
  const H = 56;
  const start = D.hours[0];
  const pos = t => {
    const [h, m] = t.split(':').map(Number);
    return (h - start + m / 60) * H;
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '56px repeat(7,minmax(110px,1fr))',
      position: 'sticky',
      top: 0,
      zIndex: 4,
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", null), D.week.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '10px 10px 8px',
      borderLeft: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-subtle)'
    }
  }, d.d), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 18px/1 var(--font-sans)',
      color: i === 5 ? '#fff' : 'var(--text-strong)',
      background: i === 5 ? 'var(--today)' : 'transparent',
      borderRadius: 'var(--radius-full)',
      padding: i === 5 ? '4px 8px' : 0
    }
  }, d.n)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '56px repeat(7,minmax(110px,1fr))',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", null, D.hours.map(h => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      height: H,
      font: '400 11px/1 var(--font-mono)',
      color: 'var(--text-subtle)',
      textAlign: 'right',
      paddingRight: 8,
      transform: 'translateY(-6px)'
    }
  }, String(h).padStart(2, '0'), ":00"))), D.week.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'relative',
      borderLeft: '1px solid var(--border-subtle)'
    }
  }, D.hours.map(h => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      height: H,
      borderTop: '1px solid var(--border-subtle)',
      boxSizing: 'border-box'
    }
  })), appts.filter(a => a.day === i).map(a => {
    const c = a.status === 'cancelled',
      done = a.status === 'completed';
    const col = D.shops[a.shop].color;
    return /*#__PURE__*/React.createElement("button", {
      key: a.id,
      onClick: () => onOpen(a),
      style: {
        position: 'absolute',
        left: 4,
        right: 4,
        top: pos(a.start) + 1,
        height: Math.max(a.mins / 60 * H - 3, 26),
        boxSizing: 'border-box',
        textAlign: 'left',
        cursor: 'pointer',
        overflow: 'hidden',
        border: 0,
        borderRadius: 'var(--radius-sm)',
        padding: '4px 8px',
        background: c || done ? 'var(--stone-100)' : 'color-mix(in oklab,' + col + ' 14%,white)',
        boxShadow: 'inset 3px 0 0 ' + (c || done ? 'var(--stone-300)' : col) + (a.isNew ? ',0 0 0 2px var(--marigold-500),var(--shadow-md)' : ''),
        zIndex: a.isNew ? 3 : undefined,
        animation: a.isNew ? 'nm-fade-up var(--duration-slow) var(--ease-out)' : undefined,
        opacity: c ? .7 : 1,
        outline: a.status === 'pending' ? '1px dashed ' + col : 'none',
        outlineOffset: -1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        font: '600 12px/1.3 var(--font-sans)',
        color: 'var(--text-strong)',
        textDecoration: c ? 'line-through' : 'none',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, a.status === 'ready' && /*#__PURE__*/React.createElement(Icon, {
      name: "package-check",
      size: 12,
      color: "var(--status-info)"
    }), done && /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 12,
      color: "var(--text-subtle)"
    }), !a.synced && /*#__PURE__*/React.createElement(Icon, {
      name: "calendar-clock",
      size: 12,
      color: "var(--status-warning)"
    }), a.start, " ", a.customer), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 11px/1.3 var(--font-sans)',
        color: 'var(--text-muted)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, a.item));
  }), i === 5 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: pos('12:20'),
      height: 2,
      background: 'var(--today)',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: -4,
      top: -3,
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--today)'
    }
  }))))));
}
window.WeekCalendar = WeekCalendar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/WeekCalendar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/data.js
try { (() => {
window.AD_DATA = {
  week: [{
    iso: '2026-11-09',
    d: 'จ.',
    n: 9
  }, {
    iso: '2026-11-10',
    d: 'อ.',
    n: 10
  }, {
    iso: '2026-11-11',
    d: 'พ.',
    n: 11
  }, {
    iso: '2026-11-12',
    d: 'พฤ.',
    n: 12
  }, {
    iso: '2026-11-13',
    d: 'ศ.',
    n: 13
  }, {
    iso: '2026-11-14',
    d: 'ส.',
    n: 14
  }, {
    iso: '2026-11-15',
    d: 'อา.',
    n: 15
  }],
  hours: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  shops: {
    bake: {
      name: 'Bake Me · สยาม',
      short: 'Bake Me',
      color: 'var(--event-marigold)'
    },
    green: {
      name: 'Green Grocer · อารีย์',
      short: 'Green Grocer',
      color: 'var(--event-olive)'
    },
    gadget: {
      name: 'Gadget Hub · ลาดพร้าว',
      short: 'Gadget Hub',
      color: 'var(--event-indigo)'
    },
    flower: {
      name: 'ร้านดอกไม้ป้าแดง · ปากคลอง',
      short: 'ป้าแดง',
      color: 'var(--event-rose)'
    }
  },
  statusLabel: {
    pending: 'รอเตรียม',
    ready: 'พร้อมรับ',
    completed: 'รับแล้ว',
    cancelled: 'ยกเลิก'
  },
  appts: [{
    id: 1,
    day: 0,
    start: '10:00',
    mins: 30,
    item: 'ผักสลัดออร์แกนิก 3 ถุง',
    order: 'G-2210',
    shop: 'green',
    customer: 'นที ส.',
    status: 'completed',
    synced: true,
    phone: '089-111-2222',
    email: 'natee@gmail.com',
    code: '3391'
  }, {
    id: 2,
    day: 1,
    start: '13:00',
    mins: 30,
    item: 'iPad Air 11"',
    order: 'GH-5520',
    shop: 'gadget',
    customer: 'มาลี กิตติ',
    status: 'ready',
    synced: true,
    phone: '081-234-5678',
    email: 'malee.k@gmail.com',
    code: '7710'
  }, {
    id: 3,
    day: 2,
    start: '11:30',
    mins: 30,
    item: 'ช่อกุหลาบขาว 24 ดอก',
    order: '',
    shop: 'flower',
    customer: 'กานต์ ว.',
    status: 'pending',
    synced: false,
    phone: '086-555-1234',
    email: '',
    code: '1184'
  }, {
    id: 4,
    day: 3,
    start: '10:30',
    mins: 30,
    item: 'ครัวซองต์ 12 ชิ้น',
    order: 'A-1031',
    shop: 'bake',
    customer: 'Ploy R.',
    status: 'ready',
    synced: true,
    phone: '092-777-8888',
    email: 'ploy.r@gmail.com',
    code: '5402'
  }, {
    id: 5,
    day: 3,
    start: '15:00',
    mins: 30,
    item: 'หูฟัง AirPods Pro',
    order: 'GH-5531',
    shop: 'gadget',
    customer: 'ธีร์ อ.',
    status: 'pending',
    synced: true,
    phone: '083-222-3333',
    email: 'thee@gmail.com',
    code: '6627'
  }, {
    id: 6,
    day: 4,
    start: '14:00',
    mins: 30,
    item: 'ผลไม้กระเช้า',
    order: 'G-2234',
    shop: 'green',
    customer: 'วรรณ จ.',
    status: 'cancelled',
    synced: true,
    phone: '084-999-0000',
    email: 'wan@gmail.com',
    code: '2045'
  }, {
    id: 7,
    day: 5,
    start: '11:00',
    mins: 30,
    item: 'เค้กชิฟฟอนส้ม 1 ปอนด์',
    order: 'A-1040',
    shop: 'bake',
    customer: 'อร ป.',
    status: 'ready',
    synced: true,
    phone: '087-654-3210',
    email: 'orn@gmail.com',
    code: '8812'
  }, {
    id: 8,
    day: 5,
    start: '16:00',
    mins: 30,
    item: 'พวงมาลัยดาวเรือง 5 พวง',
    order: '',
    shop: 'flower',
    customer: 'Jane T.',
    status: 'pending',
    synced: true,
    phone: '095-123-4567',
    email: 'jane.t@gmail.com',
    code: '4930'
  }, {
    id: 9,
    day: 6,
    start: '13:30',
    mins: 30,
    item: 'Nintendo Switch 2',
    order: 'GH-5544',
    shop: 'gadget',
    customer: 'ภูมิ ช.',
    status: 'pending',
    synced: true,
    phone: '088-321-6540',
    email: 'phum@gmail.com',
    code: '7058'
  }]
};
window.AD_END = function (t, mins) {
  const [h, m] = t.split(':').map(Number);
  const x = h * 60 + m + mins;
  return String(Math.floor(x / 60)).padStart(2, '0') + ':' + String(x % 60).padStart(2, '0');
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/data.js", error: String((e && e.message) || e) }); }

// ui_kits/booking/BookingShell.jsx
try { (() => {
const {
  Stepper,
  Icon,
  Avatar
} = window.NadmaiDesignSystem_0c4e36;
function BookingShell({
  step,
  shop,
  children,
  footer
}) {
  const p = window.BK_DATA.platform;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--bg-app)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      width: '100%',
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-booking)',
      margin: '0 auto',
      padding: '16px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-brand-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "package-check",
    size: 22,
    color: "var(--text-brand)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-title)',
      color: 'var(--text-strong)'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      font: 'var(--type-caption)',
      color: 'var(--text-subtle)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: shop ? 'store' : 'map-pin',
    size: 13
  }), shop ? shop.title : 'เลือกร้านที่จะไปรับสินค้า'))), step < 4 && /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-booking)',
      margin: '0 auto',
      padding: '0 20px 16px'
    }
  }, /*#__PURE__*/React.createElement(Stepper, {
    steps: ['ร้านค้า', 'วันเวลา', 'ข้อมูล', 'ยืนยัน'],
    current: step
  }))), /*#__PURE__*/React.createElement("main", {
    key: step,
    style: {
      width: '100%',
      maxWidth: 'var(--container-booking)',
      padding: '24px 20px 120px',
      boxSizing: 'border-box',
      animation: 'nm-fade-up var(--duration-slow) var(--ease-out)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(255,255,255,.92)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-booking)',
      margin: '0 auto',
      padding: '12px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, footer)));
}
function StepTitle({
  title,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: 'var(--type-h2)',
      color: 'var(--text-strong)'
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, sub));
}
Object.assign(window, {
  BookingShell,
  StepTitle
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking/BookingShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking/ConfirmedStep.jsx
try { (() => {
function ConfirmedStep({
  p,
  date,
  time,
  form,
  code,
  onRestart
}) {
  const {
    Card,
    Button,
    Icon,
    Toast
  } = window.NadmaiDesignSystem_0c4e36;
  const [toast, setToast] = React.useState(form.gcal);
  React.useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(false), 4000);
    return () => clearTimeout(t);
  }, [toast]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'var(--status-success-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 32,
    color: "var(--status-success)"
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '16px 0 4px',
      font: 'var(--type-h2)',
      color: 'var(--text-strong)'
    }
  }, "\u0E19\u0E31\u0E14\u0E23\u0E31\u0E1A\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, "\u0E41\u0E2A\u0E14\u0E07\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E35\u0E49\u0E17\u0E35\u0E48\u0E23\u0E49\u0E32\u0E19\u0E15\u0E2D\u0E19\u0E23\u0E31\u0E1A\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      padding: '12px 24px',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-card)',
      border: '1px dashed var(--border-strong)',
      font: '600 36px/1 var(--font-mono)',
      letterSpacing: '0.12em',
      color: 'var(--text-strong)'
    }
  }, code), /*#__PURE__*/React.createElement(Card, {
    padding: 20,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      textAlign: 'left',
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(SummaryRows, {
    p: p,
    date: date,
    time: time
  })), form.gcal && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      textAlign: 'left',
      marginTop: 12,
      padding: '14px 16px',
      background: 'var(--surface-brand-soft)',
      borderRadius: 'var(--radius-lg)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar-check",
    size: 22,
    color: "var(--text-brand)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--teal-800)'
    }
  }, "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E25\u0E07\u0E43\u0E19 Google Calendar \u0E41\u0E25\u0E49\u0E27"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--teal-700)'
    }
  }, form.email || 'you@gmail.com', " \xB7 \u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E01\u0E48\u0E2D\u0E19 ", form.remind))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      width: '100%',
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: "navigation",
    fullWidth: true
  }, "\u0E19\u0E33\u0E17\u0E32\u0E07\u0E44\u0E1B\u0E23\u0E49\u0E32\u0E19"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconLeft: "rotate-ccw",
    onClick: onRestart
  }, "\u0E19\u0E31\u0E14\u0E23\u0E31\u0E1A\u0E2D\u0E35\u0E01\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E40\u0E27\u0E25\u0E32\u0E23\u0E31\u0E1A"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--status-danger)'
    }
  }, "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E19\u0E31\u0E14\u0E23\u0E31\u0E1A")), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: '50%',
      bottom: 24,
      transform: 'translateX(-50%)',
      zIndex: 20,
      width: 'calc(100% - 32px)',
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "sync",
    title: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E25\u0E07\u0E43\u0E19 Google Calendar \u0E41\u0E25\u0E49\u0E27",
    description: window.BK_FMT(date) + ' · ' + time,
    onClose: () => setToast(false)
  })));
}
window.ConfirmedStep = ConfirmedStep;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking/ConfirmedStep.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking/DateTimeStep.jsx
try { (() => {
function DateTimeStep({
  date,
  time,
  onDate,
  onTime
}) {
  const {
    MiniCalendar,
    TimeSlot,
    Card,
    Icon
  } = window.NadmaiDesignSystem_0c4e36;
  const D = window.BK_DATA;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepTitle, {
    title: "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E27\u0E31\u0E19\u0E41\u0E25\u0E30\u0E40\u0E27\u0E25\u0E32\u0E23\u0E31\u0E1A",
    sub: 'ช่วงรับ 30 นาที · แสดงตาม' + D.platform.tz
  }), /*#__PURE__*/React.createElement(Card, {
    padding: 16,
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(MiniCalendar, {
    today: D.today,
    minDate: D.today,
    value: date,
    onChange: d => {
      onDate(d);
      onTime(null);
    }
  })), date ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-title)',
      color: 'var(--text-strong)'
    }
  }, window.BK_FMT(date)), Object.entries(D.slots).map(([k, list]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-subtle)',
      marginBottom: 8
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(84px,1fr))',
      gap: 8
    }
  }, list.map(t => /*#__PURE__*/React.createElement(TimeSlot, {
    key: t,
    time: t,
    disabled: D.full.includes(t),
    note: t === '14:30' ? 'คิวเหลือ 1' : undefined,
    selected: t === time,
    onClick: () => onTime(t)
  })))))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--type-body-sm)',
      color: 'var(--text-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 16
  }), "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E27\u0E31\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E0A\u0E48\u0E27\u0E07\u0E40\u0E27\u0E25\u0E32\u0E23\u0E31\u0E1A"));
}
window.DateTimeStep = DateTimeStep;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking/DateTimeStep.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking/DetailsStep.jsx
try { (() => {
function DetailsStep({
  form,
  setForm
}) {
  const {
    Input,
    Textarea,
    Select,
    Checkbox,
    Card,
    Switch
  } = window.NadmaiDesignSystem_0c4e36;
  const up = k => e => setForm({
    ...form,
    [k]: e.target.value
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepTitle, {
    title: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1C\u0E39\u0E49\u0E23\u0E31\u0E1A",
    sub: "\u0E23\u0E49\u0E32\u0E19\u0E08\u0E30\u0E43\u0E0A\u0E49\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E19\u0E35\u0E49\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E15\u0E31\u0E27\u0E15\u0E19\u0E15\u0E2D\u0E19\u0E23\u0E31\u0E1A\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    id: "n",
    label: "\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E23\u0E31\u0E1A",
    required: true,
    placeholder: "\u0E40\u0E0A\u0E48\u0E19 \u0E21\u0E32\u0E25\u0E35 \u0E01\u0E34\u0E15\u0E15\u0E34",
    value: form.name,
    onChange: up('name')
  }), /*#__PURE__*/React.createElement(Input, {
    id: "p",
    label: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C",
    type: "tel",
    iconLeft: "phone",
    required: true,
    placeholder: "08x-xxx-xxxx",
    value: form.phone,
    onChange: up('phone')
  }), /*#__PURE__*/React.createElement(Input, {
    id: "e",
    label: "\u0E2D\u0E35\u0E40\u0E21\u0E25 Google",
    type: "email",
    iconLeft: "mail",
    placeholder: "you@gmail.com",
    hint: "\u0E40\u0E23\u0E32\u0E08\u0E30\u0E2A\u0E48\u0E07\u0E19\u0E31\u0E14\u0E23\u0E31\u0E1A\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E40\u0E02\u0E49\u0E32 Google Calendar \u0E17\u0E35\u0E48\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E19\u0E35\u0E49",
    value: form.email,
    onChange: up('email')
  }), /*#__PURE__*/React.createElement(Textarea, {
    id: "t",
    label: "\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E2B\u0E15\u0E38\u0E16\u0E36\u0E07\u0E23\u0E49\u0E32\u0E19 (\u0E44\u0E21\u0E48\u0E1A\u0E31\u0E07\u0E04\u0E31\u0E1A)",
    rows: 3,
    placeholder: "\u0E40\u0E0A\u0E48\u0E19 \u0E43\u0E2B\u0E49\u0E04\u0E19\u0E2D\u0E37\u0E48\u0E19\u0E21\u0E32\u0E23\u0E31\u0E1A\u0E41\u0E17\u0E19",
    value: form.note,
    onChange: up('note')
  }), /*#__PURE__*/React.createElement(Card, {
    padding: 16,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E25\u0E07\u0E43\u0E19 Google Calendar \u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34",
    description: "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E19\u0E31\u0E14\u0E23\u0E31\u0E1A\u0E43\u0E19\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E17\u0E31\u0E19\u0E17\u0E35\u0E17\u0E35\u0E48\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19",
    checked: form.gcal,
    onChange: v => setForm({
      ...form,
      gcal: v
    })
  }), /*#__PURE__*/React.createElement(Select, {
    label: "\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E01\u0E48\u0E2D\u0E19",
    iconLeft: "bell",
    options: ['15 นาที', '30 นาที', '1 ชั่วโมง', '1 วัน'],
    value: form.remind,
    onChange: up('remind')
  })), /*#__PURE__*/React.createElement(Checkbox, {
    label: "\u0E22\u0E2D\u0E21\u0E23\u0E31\u0E1A\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02\u0E01\u0E32\u0E23\u0E23\u0E31\u0E1A\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32",
    description: "\u0E23\u0E49\u0E32\u0E19\u0E40\u0E01\u0E47\u0E1A\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E44\u0E27\u0E49\u0E43\u0E2B\u0E49 24 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E27\u0E25\u0E32\u0E19\u0E31\u0E14",
    checked: form.terms,
    onChange: v => setForm({
      ...form,
      terms: v
    })
  })));
}
window.DetailsStep = DetailsStep;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking/DetailsStep.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking/ReviewStep.jsx
try { (() => {
function SummaryRows({
  p,
  date,
  time,
  form
}) {
  const {
    Icon
  } = window.NadmaiDesignSystem_0c4e36;
  const rows = [['package', p.item, p.order ? 'คำสั่งซื้อ #' + p.order : null], ['store', p.shop.title, p.shop.address], ['calendar', window.BK_FMT(date), null], ['clock', 'รับช่วง ' + time + '–' + window.BK_END(time, window.BK_DATA.windowMins) + ' น.', null]];
  if (form) rows.push(['user', form.name || '—', form.phone]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, rows.map(([i, a, b], k) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 18,
    color: "var(--text-subtle)",
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-strong)'
    }
  }, a), b && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, b)))));
}
function ReviewStep({
  p,
  date,
  time,
  form,
  onEdit
}) {
  const {
    Card,
    Button,
    Icon
  } = window.NadmaiDesignSystem_0c4e36;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepTitle, {
    title: "\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E41\u0E25\u0E30\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19",
    sub: "\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E01\u0E48\u0E2D\u0E19\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E19\u0E31\u0E14\u0E23\u0E31\u0E1A\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"
  }), /*#__PURE__*/React.createElement(Card, {
    padding: 20
  }, /*#__PURE__*/React.createElement(SummaryRows, {
    p: p,
    date: date,
    time: time,
    form: form
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-subtle)',
      margin: '16px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--type-body-sm)',
      color: form.gcal ? 'var(--text-brand)' : 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: form.gcal ? 'calendar-check' : 'calendar-x',
    size: 16
  }), form.gcal ? 'จะเพิ่มลงใน Google Calendar ของ ' + (form.email || 'คุณ') : 'ไม่เพิ่มลงปฏิทิน'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 16
  }), "\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E01\u0E48\u0E2D\u0E19 ", form.remind)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: "pencil",
    onClick: onEdit
  }, "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E27\u0E31\u0E19\u0E40\u0E27\u0E25\u0E32")));
}
Object.assign(window, {
  ReviewStep,
  SummaryRows
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking/ReviewStep.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking/ShopStep.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ShopStep({
  shop,
  onShop,
  item,
  onItem,
  order,
  onOrder
}) {
  const {
    ServiceOption,
    Input
  } = window.NadmaiDesignSystem_0c4e36;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepTitle, {
    title: "\u0E19\u0E31\u0E14\u0E23\u0E31\u0E1A\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E17\u0E35\u0E48\u0E23\u0E49\u0E32\u0E19\u0E44\u0E2B\u0E19",
    sub: "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E23\u0E49\u0E32\u0E19 \u0E41\u0E25\u0E49\u0E27\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E17\u0E35\u0E48\u0E08\u0E30\u0E44\u0E1B\u0E23\u0E31\u0E1A"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, window.BK_DATA.shops.map(s => /*#__PURE__*/React.createElement(ServiceOption, _extends({
    key: s.id
  }, s, {
    selected: shop === s.id,
    onClick: () => onShop(s.id)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Input, {
    id: "item",
    label: "\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E17\u0E35\u0E48\u0E08\u0E30\u0E23\u0E31\u0E1A",
    required: true,
    size: "lg",
    iconLeft: "package",
    placeholder: "\u0E40\u0E0A\u0E48\u0E19 \u0E40\u0E04\u0E49\u0E01\u0E27\u0E31\u0E19\u0E40\u0E01\u0E34\u0E14 2 \u0E1B\u0E2D\u0E19\u0E14\u0E4C",
    value: item,
    onChange: e => onItem(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    id: "order",
    label: "\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D (\u0E16\u0E49\u0E32\u0E21\u0E35)",
    iconLeft: "receipt",
    placeholder: "\u0E40\u0E0A\u0E48\u0E19 A-1042",
    value: order,
    onChange: e => onOrder(e.target.value)
  })));
}
window.ShopStep = ShopStep;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking/ShopStep.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking/data.js
try { (() => {
window.BK_DATA = {
  platform: {
    name: 'นัดรับสินค้า',
    tz: 'เวลาประเทศไทย (GMT+7)'
  },
  shops: [{
    id: 'bake',
    title: 'Bake Me · สยาม',
    description: 'ชั้น 2 สยามสแควร์วัน · จุดรับหน้าร้าน',
    duration: 'เปิด 10:00–20:00',
    color: 'var(--event-marigold)',
    address: 'สยามสแควร์วัน ชั้น 2'
  }, {
    id: 'green',
    title: 'Green Grocer · อารีย์',
    description: 'ผักผลไม้ออร์แกนิก · รับที่เคาน์เตอร์',
    duration: 'เปิด 08:00–18:00',
    color: 'var(--event-olive)',
    address: 'ซอยอารีย์ 4'
  }, {
    id: 'gadget',
    title: 'Gadget Hub · ลาดพร้าว',
    description: 'เซ็นทรัลลาดพร้าว ชั้น 3 · ต้องแสดงบัตรประชาชน',
    duration: 'เปิด 10:00–21:00',
    color: 'var(--event-indigo)',
    address: 'เซ็นทรัลลาดพร้าว ชั้น 3'
  }, {
    id: 'flower',
    title: 'ร้านดอกไม้ป้าแดง · ปากคลอง',
    description: 'ช่อดอกไม้สั่งทำ · รับหน้าร้าน',
    duration: 'เปิด 06:00–17:00',
    color: 'var(--event-rose)',
    address: 'ปากคลองตลาด ล็อก 12'
  }],
  slots: {
    'เช้า': ['10:00', '10:30', '11:00', '11:30'],
    'บ่าย': ['13:00', '13:30', '14:00', '14:30', '15:00', '15:30'],
    'เย็น': ['17:00', '17:30', '18:00']
  },
  full: ['10:30', '15:00'],
  windowMins: 30,
  today: '2026-11-07'
};
window.BK_FMT = function (iso) {
  const d = new Date(iso + 'T00:00:00');
  const dow = ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'][d.getDay()];
  const m = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'][d.getMonth()];
  return dow + ' ' + d.getDate() + ' ' + m + ' ' + (d.getFullYear() + 543);
};
window.BK_END = function (t, mins) {
  const [h, m] = t.split(':').map(Number);
  const x = h * 60 + m + mins;
  return String(Math.floor(x / 60)).padStart(2, '0') + ':' + String(x % 60).padStart(2, '0');
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.AppointmentCard = __ds_scope.AppointmentCard;

__ds_ns.CalendarSync = __ds_scope.CalendarSync;

__ds_ns.MiniCalendar = __ds_scope.MiniCalendar;

__ds_ns.ServiceOption = __ds_scope.ServiceOption;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.TimeSlot = __ds_scope.TimeSlot;

})();
