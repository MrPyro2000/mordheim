"use strict";

function _typeof(e) {
    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
}
var selectHelper = function(e, t) {
    var i = document.createElement("select");
    return $(i).html(t.fn(this)), i.value = e, i.children[i.selectedIndex] ? i.children[i.selectedIndex].setAttribute("selected", "selected") : i.children[0] && i.children[0].setAttribute("selected", "selected"), i.innerHTML
};
Handlebars.registerHelper("select", selectHelper),
    function(e, t) {
        e.views = {
            profileicons: !1,
            profile: !1
        }, e.panels = {
            skills: !1,
            spells: !1,
            mutations: !1
        }, e.templates = {
            profile: !1,
            skill: !1,
            notice: !1,
            point: {
                offense: '<figure class="point point-offense"></figure>',
                strategy: '<figure class="point point-strategy"></figure>'
            },
            quicksummary: !1
        }, e.mechanics = {
            criticalHit: 5,
            woundsModifier: 15,
            dualWieldModifier: .75,
            unitTypes: {
                leader: {
                    wounds: 100,
                    initiative: 35,
                    attributeMax: 20
                },
                hero: {
                    wounds: 100,
                    initiative: 35,
                    attributeMax: 20
                },
                henchman: {
                    wounds: 100,
                    initiative: 33,
                    attributeMax: 20
                },
                impressive: {
                    wounds: 250,
                    initiative: 31,
                    attributeMax: 25
                }
            }
        }, e.slots = {
            mutations: 3,
            skills: 5,
            spells: 5
        }, e.profiles = {}, e.attributes = {}, e.skills = [], e.spells = [], e.mutations = [], e.injuries = [], e.books = [], e.equipment = {}, e.resistances = {}, e.initiatives = {}, e.points = {}, e.types = {}, e.activeProfile = {}, e.baseProfile = {
            name: "",
            title: "",
            type: "",
            warband: "",
            rank: 10,
            rating: 0,
            wounds: 0,
            points: {
                offense: {
                    base: 0,
                    current: 0
                },
                strategy: {
                    base: 0,
                    current: 0
                }
            },
            skillpoints: {
                base: 0,
                current: 0
            },
            spellpoints: {
                base: 0,
                current: 0
            },
            attributepoints: {
                physical: {
                    base: 0,
                    current: 0
                },
                mental: {
                    base: 0,
                    current: 0
                },
                martial: {
                    base: 0,
                    current: 0
                }
            },
            attributes: {
                strength: {
                    min: {
                        base: 0,
                        current: 0
                    },
                    max: {
                        base: 0,
                        current: 0,
                        type: 20
                    },
                    value: 0
                },
                toughness: {
                    min: {
                        base: 0,
                        current: 0
                    },
                    max: {
                        base: 0,
                        current: 0,
                        type: 20
                    },
                    value: 0
                },
                agility: {
                    min: {
                        base: 0,
                        current: 0
                    },
                    max: {
                        base: 0,
                        current: 0,
                        type: 20
                    },
                    value: 0
                },
                leadership: {
                    min: {
                        base: 0,
                        current: 0
                    },
                    max: {
                        base: 0,
                        current: 0,
                        type: 20
                    },
                    value: 0
                },
                intelligence: {
                    min: {
                        base: 0,
                        current: 0
                    },
                    max: {
                        base: 0,
                        current: 0,
                        type: 20
                    },
                    value: 0
                },
                alertness: {
                    min: {
                        base: 0,
                        current: 0
                    },
                    max: {
                        base: 0,
                        current: 0,
                        type: 20
                    },
                    value: 0
                },
                weapon_skill: {
                    min: {
                        base: 0,
                        current: 0
                    },
                    max: {
                        base: 0,
                        current: 0,
                        type: 20
                    },
                    value: 0
                },
                ballistic_skill: {
                    min: {
                        base: 0,
                        current: 0
                    },
                    max: {
                        base: 0,
                        current: 0,
                        type: 20
                    },
                    value: 0
                },
                accuracy: {
                    min: {
                        base: 0,
                        current: 0
                    },
                    max: {
                        base: 0,
                        current: 0,
                        type: 20
                    },
                    value: 0
                }
            },
            resistances: {
                poison: 0,
                melee: 0,
                critical_hit: 0,
                wyrdstone: 0,
                magic: 0,
                ranged: 0,
                stun: 0,
                trap: 0,
                all_alone: 0,
                fear: 0,
                terror: 0,
                stupidity: 0,
                deranged: 0,
                paranoia: 0
            },
            other: {
                dodge: 0,
                parry: 0,
                movement: 0,
                initiative: 0,
                morale_impact: 0,
                morale: 0
            },
            equipment: {
                head: !1,
                body: !1,
                mainhand: !1,
                offhand: !1
            },
            skills: [],
            spells: [],
            mutations: [],
            injuries: [],
            books: [],
            restrictions: {
                skills: ["basic"],
                spells: [],
                equipment: []
            }
        }, e.saveProfile = {
            profile: "",
            attributes: {
                strength: 0,
                toughness: 0,
                agility: 0,
                leadership: 0,
                intelligence: 0,
                alertness: 0,
                weapon_skill: 0,
                ballistic_skill: 0,
                accuracy: 0
            },
            equipment: {
                head: !1,
                body: !1,
                mainhand: !1,
                offhand: !1
            },
            skills: [],
            spells: [],
            mutations: [],
            injuries: [],
            books: []
        }, e.attributeUpdate = function(i, a) {
            if (e.activeProfile.attributes[i] !== t) {
                var r = Object.create(e.activeProfile.attributes[i]);
                r.value += a;
                var n = e.attributes[i].type,
                    l = e.activeProfile.attributepoints[n].current;
                (l > 0 || 0 > a) && r.value <= r.max.current && r.value >= r.min.current && r.value <= r.max.type && (e.activeProfile.attributes[i].value = r.value, e.activeProfile.attributepoints[n].current -= a)
            }
        }, e.attributeIncrease = function(t) {
            e.attributeUpdate(t, 1)
        }, e.attributeDecrease = function(t) {
            e.attributeUpdate(t, -1)
        }, e.attributeViewUpdate = function() {
            for (var t in e.activeProfile.attributepoints) {
                var i = $("#attribute-points-" + t);
                i.length && i.text(e.activeProfile.attributepoints[t].current + " Unspent Points")
            }
            for (var a in e.activeProfile.attributes) {
                var r = $("#attribute-" + a);
                if (r.length) {
                    var n = e.activeProfile.attributes[a].max.current < e.activeProfile.attributes[a].max.type ? e.activeProfile.attributes[a].max.current : e.activeProfile.attributes[a].max.type;
                    r.find(".attribute-value").text(e.activeProfile.attributes[a].value + " / " + n)
                }
            }
        }, e.profileLoad = function(i) {
            if (e.profiles[i] !== t) {
                e.activeProfile = JSON.parse(JSON.stringify(e.baseProfile)), e.activeProfile.name = i;
                var a = e.profiles[i],
                    r = i;
                r = r.replace(/_/g, " "), r = r.replace(/\w\S*/g, function(e) {
                    return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
                }), r = r.replace("Of", "of"), e.activeProfile.title = r, e.activeProfile.type = a.type, e.activeProfile.rating = a.rating, e.activeProfile.wounds = e.types[a.type].wounds, e.activeProfile.skillpoints.base = a.skillpoints, e.activeProfile.skillpoints.current = a.skillpoints, e.activeProfile.spellpoints.base = a.spellpoints, e.activeProfile.spellpoints.current = a.spellpoints, e.activeProfile.points.offense.base = e.points[a.type].offense, e.activeProfile.points.offense.current = e.points[a.type].offense, e.activeProfile.points.strategy.base = e.points[a.type].strategy, e.activeProfile.points.strategy.current = e.points[a.type].strategy;
                for (var n in a.attributepoints) e.activeProfile.attributepoints[n].base = a.attributepoints[n], e.activeProfile.attributepoints[n].current = a.attributepoints[n];
                for (var n in a.attributes) e.activeProfile.attributes[n].min.base = a.attributes[n].min, e.activeProfile.attributes[n].min.current = a.attributes[n].min, e.activeProfile.attributes[n].max.base = a.attributes[n].max, e.activeProfile.attributes[n].max.current = a.attributes[n].max, e.activeProfile.attributes[n].value = a.attributes[n].min, e.activeProfile.attributes[n].max.type = e.mechanics.unitTypes[a.type].attributeMax;
                if (a.skills !== t) {
                    var l = !0,
                        o = !1,
                        s = t;
                    try {
                        for (var c, u = a.skills[Symbol.iterator](); !(l = (c = u.next()).done); l = !0) {
                            var f = c.value,
                                p = !1;
                            if (e.skills.active[f] !== t ? p = "active" : e.skills.passive[f] !== t && (p = "passive"), p !== !1) {
                                var v = {
                                    name: f,
                                    version: "basic",
                                    type: p
                                };
                                e.activeProfile.skills.push(v)
                            }
                        }
                    } catch (m) {
                        o = !0, s = m
                    } finally {
                        try {
                            !l && u["return"] && u["return"]()
                        } finally {
                            if (o) throw s
                        }
                    }
                }
                if (a.spells !== t) {
                    var d = !0,
                        y = !1,
                        h = t;
                    try {
                        for (var b, k = a.spells[Symbol.iterator](); !(d = (b = k.next()).done); d = !0) {
                            var P = b.value,
                                g = {
                                    name: P,
                                    version: "basic"
                                };
                            e.activeProfile.spells.push(g)
                        }
                    } catch (m) {
                        y = !0, h = m
                    } finally {
                        try {
                            !d && k["return"] && k["return"]()
                        } finally {
                            if (y) throw h
                        }
                    }
                }
                for (var w in e.resistances) e.activeProfile.resistances[w] = e.resistances[w];
                e.activeProfile.other.initiative = e.initiatives[a.type], e.activeProfile.other.movement = a.other.movement, a.restrictions !== t && (a.restrictions.spells !== t && a.restrictions.spells.length > 0 && (e.activeProfile.restrictions.spells = e.activeProfile.restrictions.spells.concat(a.restrictions.spells)), a.restrictions.skills !== t && a.restrictions.skills.length > 0 && (e.activeProfile.restrictions.skills = e.activeProfile.restrictions.skills.concat(a.restrictions.skills)), a.restrictions.mutations !== t && a.restrictions.mutations.length > 0 && (e.activeProfile.restrictions.mutations = a.restrictions.mutations.slice()), a.restrictions.equipment !== t && a.restrictions.equipment.length > 0 && (e.activeProfile.restrictions.equipment = e.activeProfile.restrictions.equipment.concat(a.restrictions.equipment))), e.uiAlertClear(), e.uiSelectSkillClear()
            }
        }, e.profilePanelViewUpdate = function() {
            var t = e.activeProfile.type.charAt(0).toUpperCase() + e.activeProfile.type.slice(1),
                i = "";
            e.profiles[e.activeProfile.name].icon.length && (i = e.profiles[e.activeProfile.name].icon, i = "images/icons/class_icons/unit_icon_" + i + ".png");
            var a = '<div class="panel-profile-points panel-profile-points-default">' + e.templates.point.offense.repeat(e.activeProfile.points.offense.current) + '</div><div class="panel-profile-points panel-profile-points-default">' + e.templates.point.strategy.repeat(e.activeProfile.points.strategy.current) + '</div><div class="panel-profile-points panel-profile-points-small"> ' + e.templates.point.offense + " " + e.activeProfile.points.offense.current + '</div><div class="panel-profile-points panel-profile-points-small">' + e.templates.point.strategy + " " + e.activeProfile.points.strategy.current + "</div>",
                r = {
                    type: t,
                    title: e.activeProfile.title,
                    icon: i,
                    points: a
                },
                n = e.templates.profile(r);
            n = $(n), $("#panel-profile").replaceWith(n)
        }, e.profileViewInit = function() {
            e.activeProfile.restrictions.spells.length > 0 ? "none" === e.panels.spells.css("display") && e.panels.spells.toggle() : "none" !== e.panels.spells.css("display") && e.panels.spells.toggle(), e.profiles[e.activeProfile.name].restrictions.mutations !== t ? "none" === e.panels.mutations.css("display") && e.panels.mutations.toggle() : "none" !== e.panels.mutations.css("display") && e.panels.mutations.toggle(), $(".ability-select option").prop("selected", !1)
        }, e.profileViewUpdate = function() {
            if (0 !== e.activeProfile.name.length) {
                e.attributeViewUpdate(), e.resistancesViewUpdate(), e.generalViewUpdate(), e.otherViewUpdate(), e.profilePanelViewUpdate(), e.uiOptionShowAll(), e.uiRestrictSkillSelect(), e.uiRestrictSpellSelect(), e.uiRestrictMutationSelect(), e.uiRestrictEquipmentSelect(), e.skillViewUpdate();
                var i = !0,
                    a = !1,
                    r = t;
                try {
                    for (var n, l = e.activeProfile.skills[Symbol.iterator](); !(i = (n = l.next()).done); i = !0) {
                        var o = n.value;
                        e.uiOptionHide(o.name)
                    }
                } catch (s) {
                    a = !0, r = s
                } finally {
                    try {
                        !i && l["return"] && l["return"]()
                    } finally {
                        if (a) throw r
                    }
                }
                if (e.activeProfile.restrictions.spells.length > 0) {
                    e.spellViewUpdate();
                    var c = !0,
                        u = !1,
                        f = t;
                    try {
                        for (var p, v = e.activeProfile.spells[Symbol.iterator](); !(c = (p = v.next()).done); c = !0) {
                            var m = p.value;
                            e.uiOptionHide(m.name)
                        }
                    } catch (s) {
                        u = !0, f = s
                    } finally {
                        try {
                            !c && v["return"] && v["return"]()
                        } finally {
                            if (u) throw f
                        }
                    }
                }
                if (e.profiles[e.activeProfile.name].restrictions.mutations !== t) {
                    e.mutationViewUpdate();
                    var d = !0,
                        y = !1,
                        h = t;
                    try {
                        for (var b, k = e.activeProfile.mutations[Symbol.iterator](); !(d = (b = k.next()).done); d = !0) {
                            var P = b.value;
                            e.uiOptgroupHide(P.name)
                        }
                    } catch (s) {
                        y = !0, h = s
                    } finally {
                        try {
                            !d && k["return"] && k["return"]()
                        } finally {
                            if (y) throw h
                        }
                    }
                }
                if (e.equipmentViewUpdate(), e.uiPanelShow("equipment-offhand"), e.activeProfile.equipment.mainhand !== !1 && (e.equipment.weapon[e.activeProfile.equipment.mainhand.name].twohanded !== t && e.uiPanelHide("equipment-offhand"), e.equipment.weapon[e.activeProfile.equipment.mainhand.name].restrictions !== t))
                    for (var g in e.equipment.weapon[e.activeProfile.equipment.mainhand.name].restrictions) e.uiOptionShowOnly(e.equipment.weapon[e.activeProfile.equipment.mainhand.name].restrictions[g], "equipment-" + g);
                for (var w in e.activeProfile.equipment) e.activeProfile.equipment[w] !== !1 && e.uiOptionHide(e.activeProfile.equipment[w].name, "equipment-" + w);
                e.injuryViewUpdate();
                var q = !0,
                    $ = !1,
                    x = t;
                try {
                    for (var S, A = e.activeProfile.injuries[Symbol.iterator](); !(q = (S = A.next()).done); q = !0) {
                        var _ = S.value;
                        e.uiOptionHide(_), "severed_arm" === _ && e.uiPanelHide("equipment-offhand")
                    }
                } catch (s) {
                    $ = !0, x = s
                } finally {
                    try {
                        !q && A["return"] && A["return"]()
                    } finally {
                        if ($) throw x
                    }
                }
                e.booksViewUpdate();
                var j = !0,
                    O = !1,
                    D = t;
                try {
                    for (var U, V = e.activeProfile.books[Symbol.iterator](); !(j = (U = V.next()).done); j = !0) {
                        var C = U.value; - 1 !== C.indexOf("book_of") || -1 !== C.indexOf("grimoire") ? e.uiOptgroupHide(C) : e.uiOptionHide(C)
                    }
                } catch (s) {
                    O = !0, D = s
                } finally {
                    try {
                        !j && V["return"] && V["return"]()
                    } finally {
                        if (O) throw D
                    }
                }
                e.uiOptionCleanup()
            }
        }, e.skillpointsTotalCost = function() {
            var i = 0,
                a = !0,
                r = !1,
                n = t;
            try {
                for (var l, o = e.activeProfile.skills[Symbol.iterator](); !(a = (l = o.next()).done); a = !0) {
                    var s = l.value;
                    i += e.skills[s.type][s.name].cost[s.version], "mastery" === s.version && (i += e.skills[s.type][s.name].cost.basic)
                }
            } catch (c) {
                r = !0, n = c
            } finally {
                try {
                    !a && o["return"] && o["return"]()
                } finally {
                    if (r) throw n
                }
            }
            return i
        }, e.skillpointsRemaining = function() {
            var t = e.activeProfile.skillpoints.current;
            return t -= e.skillpointsTotalCost()
        }, e.skillHandleEffects = function(i, a) {
            if ((1 === a || -1 === a) && e.skills[i.type][i.name].effects !== t && e.skills[i.type][i.name].effects[i.version] !== t) {
                var r = function(r) {
                    if ("type" === r) return 1 === a ? e.activeProfile.type = e.skills[i.type][i.name].effects[i.version][r] : -1 === a && (e.activeProfile.type = e.profiles[e.activeProfile.name].type), "continue";
                    var n = e.skills[i.type][i.name].effects[i.version][r];
                    return n *= a, "skillpoints" === r ? (e.activeProfile.skillpoints.current += n, "continue") : "spellpoints" === r ? (e.activeProfile.spellpoints.current += n, "continue") : "points_offense" === r ? (e.activeProfile.points.offense.current += n, "continue") : "points_strategy" === r ? (e.activeProfile.points.strategy.current += n, "continue") : "restrictions" === r ? (e.skills[i.type][i.name].effects[i.version][r].skills !== t && (1 === a ? e.activeProfile.restrictions.skills = e.activeProfile.restrictions.skills.concat(e.skills[i.type][i.name].effects[i.version][r].skills) : -1 === a && (e.activeProfile.restrictions.skills = e.activeProfile.restrictions.skills.filter(function(t) {
                        return e.skills[i.type][i.name].effects[i.version][r].skills.indexOf(t) < 0
                    }))), "continue") : e.activeProfile.attributepoints[r] !== t ? (e.activeProfile.attributepoints[r].current += n, "continue") : e.activeProfile.attributes[r] !== t ? (e.activeProfile.attributes[r].max.current += n, "continue") : void 0
                };
                for (var n in e.skills[i.type][i.name].effects[i.version]) {
                    r(n)
                }
            }
        }, e.skillAdd = function(i, a) {
            var r = e.skillCount();
            if (r[a] === e.slots.skills) return e.uiAlertDisplay("You can only learn " + e.slots.skills + " " + a + " skills.", "danger"), !1;
            if (e.skills[a][i] === t) return !1;
            if (e.activeProfile.skills.length > 0) {
                var n = !0,
                    l = !1,
                    o = t;
                try {
                    for (var s, c = e.activeProfile.skills[Symbol.iterator](); !(n = (s = c.next()).done); n = !0) {
                        var u = s.value;
                        if (u.name === i) return !1
                    }
                } catch (f) {
                    l = !0, o = f
                } finally {
                    try {
                        !n && c["return"] && c["return"]()
                    } finally {
                        if (l) throw o
                    }
                }
            }
            var p = e.skillpointsRemaining() - e.skills[a][i].cost.basic;
            if (0 > p) return e.uiAlertDisplay("Not enough unspent skillpoints remaining.", "danger"), !1;
            var v = {
                name: i,
                version: "basic",
                type: a
            };
            return e.skillHandleEffects(v, 1), e.activeProfile.skills.push(v), !0
        }, e.skillRemove = function(i) {
            var a = e.profiles[e.activeProfile.name];
            if (a.skills !== t && -1 !== a.skills.indexOf(i)) return e.uiAlertDisplay("You can not remove a starting Skill.", "danger"), !1;
            var r = -1;
            for (var n in e.activeProfile.skills)
                if (e.activeProfile.skills[n].name === i) {
                    r = n;
                    break
                }
            if (-1 === r) return !1;
            var l = {};
            if (e.skills.active[i] !== t) l = e.skills.active[i];
            else {
                if (e.skills.passive[i] === t) return !1;
                l = e.skills.passive[i]
            }
            var o = {},
                s = !0,
                c = !1,
                u = t;
            try {
                for (var f, p = e.activeProfile.skills[Symbol.iterator](); !(s = (f = p.next()).done); s = !0) {
                    var v = f.value;
                    if (v.name === i) {
                        o = v;
                        break
                    }
                }
            } catch (m) {
                c = !0, u = m
            } finally {
                try {
                    !s && p["return"] && p["return"]()
                } finally {
                    if (c) throw u
                }
            }
            if (0 === Object.keys(o).length) return !1;
            if (l.effects !== t) {
                var d = e.skillpointsRemaining();
                if (d += l.cost[o.version], "mastery" === o.version && (d += l.cost.basic), l.effects[o.version].skillpoints !== t && (d -= l.effects[o.version].skillpoints), "mastery" === o.version && l.effects.basic.skillpoints !== t && (d -= l.effects.basic.skillpoints), 0 > d) return e.uiAlertDisplay("Not enough skillpoints for remaining skills. Remove another skill first.", "danger"), !1;
                var y = e.spellpointsRemaining();
                if (l.effects[o.version].spellpoints !== t && (y -= l.effects[o.version].spellpoints), "mastery" === o.version && l.effects.basic.spellpoints !== t && (y -= l.effects.basic.spellpoints), 0 > y) return e.uiAlertDisplay("Not enough spellpoints for remaining spells. Remove a spell first.", "danger"), !1;
                for (var h in e.activeProfile.attributepoints) {
                    var b = e.activeProfile.attributepoints[h].current;
                    if (l.effects[o.version][h] !== t && (b -= l.effects[o.version][h]), "mastery" === o.version && l.effects.basic[h] !== t && (b -= l.effects.basic[h]), 0 > b) return e.uiAlertDisplay('You have spend to much attributepoints to remove this skill. Decrease a "' + h + '" attribute first.', "danger"), !1
                }
                for (var k in e.activeProfile.attributes) {
                    var P = e.activeProfile.attributes[k].max.current;
                    if (l.effects[o.version][k] !== t && (P -= l.effects[o.version][k]), "mastery" === o.version && l.effects.basic[k] !== t && (P -= l.effects.basic[k]), e.activeProfile.attributes[k].value > P) return e.uiAlertDisplay('You have spend to much attribute points to remove this skill. Decrease "' + k + '" first.', "danger"), !1
                }
                e.skillHandleEffects(o, -1), "mastery" === o.version && (o.version = "basic", e.skillHandleEffects(o, -1))
            }
            return e.activeProfile.skills.splice(r, 1), !0
        }, e.skillChangeVersion = function(i, a) {
            var r = !0,
                n = !1,
                l = t;
            try {
                for (var o, s = e.activeProfile.skills[Symbol.iterator](); !(r = (o = s.next()).done); r = !0) {
                    var c = o.value;
                    if (c.name === i) {
                        var u = e.skills[c.type][c.name];
                        if ("basic" === a) {
                            var f = e.skillpointsRemaining();
                            if (f += u.cost.mastery, u.effects !== t && u.effects.mastery.skillpoints !== t && (f -= u.effects.mastery.skillpoints), 0 > f) return void e.uiAlertDisplay("You have spend to much skillpoints to change this skill version. Remove another skill first.", "danger");
                            for (var p in e.activeProfile.attributepoints)
                                if (u.effects !== t && u.effects.mastery[p] !== t) {
                                    var v = e.activeProfile.attributepoints[p].current;
                                    if (v -= u.effects.mastery[p], 0 > v) return void e.uiAlertDisplay('You have spend to much attributepoints to change this skill version. Decrease a "' + p + '" attribute first.', "danger")
                                }
                            e.skillHandleEffects(c, -1), c.version = a
                        }
                        if ("mastery" === a) {
                            var f = e.skillpointsRemaining();
                            if (f -= u.cost.mastery, 0 > f) return void e.uiAlertDisplay("You have not enough skillpoints to change this skill version.", "danger");
                            c.version = a, e.skillHandleEffects(c, 1)
                        }
                        return
                    }
                }
            } catch (m) {
                n = !0, l = m
            } finally {
                try {
                    !r && s["return"] && s["return"]()
                } finally {
                    if (n) throw l
                }
            }
        }, e.skillViewUpdate = function() {
            $("#skillpoints-remaining").text(e.skillpointsRemaining() + "  unspent Skillpoints");
            var i = e.skillCount();
            $("#skillslots-remaining-active").text(i.active + " / 5 Skillslots used"), $("#skillslots-remaining-passive").text(i.passive + " / 5 Skillslots used"), $(".skill-row").remove();
            var a = !0,
                r = !1,
                n = t;
            try {
                for (var l, o = e.activeProfile.skills[Symbol.iterator](); !(a = (l = o.next()).done); a = !0) {
                    var s = l.value,
                        c = e.skills[s.type][s.name],
                        u = /([+-]{0,1}[0-9]+%{0,1})/g,
                        f = "<span>$1</span>",
                        p = c.description.basic;
                    p = p.replace(u, f);
                    var v = "";
                    c.icon.length && (v = "images/icons/skills/mordheim_icons_skills_" + c.icon + ".png");
                    var m = {
                        ability: "skill",
                        name: s.name,
                        title: c.name,
                        icon: v,
                        basic: p,
                        remove: !0
                    };
                    if ("class" !== c.attribute) {
                        var d = c.description.mastery;
                        d = d.replace(u, f), m.mastery = d;
                        var y = c.attribute.charAt(0).toUpperCase() + c.attribute.slice(1) + " " + c.requirements[s.version];
                        y = y.replace("_", " "), m.requirement = y;
                        var h = "passed";
                        e.activeProfile.attributes[c.attribute].value < c.requirements[s.version] && (h = "failed"), m.requirementClass = h, e.profiles[e.activeProfile.name].skills !== t && -1 !== e.profiles[e.activeProfile.name].skills.indexOf(s.name) && (m.remove = !1)
                    } else m.remove = !1;
                    if ("active" === s.type) {
                        var b = "";
                        0 !== Object.keys(c.info.cost).length && (c.info.cost.offense !== t && (b += e.templates.point.offense.repeat(c.info.cost.offense)), c.info.cost.strategy !== t && (b += e.templates.point.strategy.repeat(c.info.cost.strategy)));
                        var k = /([0-9]+)m{0,1}/g,
                            P = "$1 meters",
                            g = c.info.range;
                        g = g.replace(k, P), m.cost = b, m.duration = c.info.duration, m.range = g, m.target = c.info.target
                    }
                    var w = e.templates.skill(m);
                    w = $(w), "class" !== c.attribute && w.find(".skill-select-version").val(s.version), $("#skill-table-" + s.type).find("tr").eq(-1).before(w)
                }
            } catch (q) {
                r = !0, n = q
            } finally {
                try {
                    !a && o["return"] && o["return"]()
                } finally {
                    if (r) throw n
                }
            }
        }, e.skillCount = function() {
            var t = {
                active: 0,
                passive: 0
            };
            return e.activeProfile.skills.forEach(function(e) {
                t[e.type] += 1
            }), t
        }, e.spellpointsTotalCost = function() {
            var i = 0,
                a = !0,
                r = !1,
                n = t;
            try {
                for (var l, o = e.activeProfile.spells[Symbol.iterator](); !(a = (l = o.next()).done); a = !0) {
                    var s = l.value;
                    i += e.spells[s.name].cost[s.version], "mastery" === s.version && (i += e.spells[s.name].cost.basic)
                }
            } catch (c) {
                r = !0, n = c
            } finally {
                try {
                    !a && o["return"] && o["return"]()
                } finally {
                    if (r) throw n
                }
            }
            return i
        }, e.spellpointsRemaining = function() {
            var t = e.activeProfile.spellpoints.current;
            return t -= e.spellpointsTotalCost()
        }, e.spellAdd = function(i) {
            if (e.activeProfile.spells.length === e.slots.spells) return e.uiAlertDisplay("You can only learn " + e.slots.spells + " spells.", "danger"), !1;
            if (e.spells === t || e.spells[i] === t) return !1;
            if (e.activeProfile.spells.length > 0) {
                var a = !0,
                    r = !1,
                    n = t;
                try {
                    for (var l, o = e.activeProfile.spells[Symbol.iterator](); !(a = (l = o.next()).done); a = !0) {
                        var s = l.value;
                        if (s.name === i) return !1
                    }
                } catch (c) {
                    r = !0, n = c
                } finally {
                    try {
                        !a && o["return"] && o["return"]()
                    } finally {
                        if (r) throw n
                    }
                }
            }
            var u = e.spellpointsRemaining() - e.spells[i].cost.basic;
            if (0 > u) return e.uiAlertDisplay("Not enough unspent spellpoints remaining.", "danger"), !1;
            var f = {
                name: i,
                version: "basic"
            };
            return e.activeProfile.spells.push(f), !0
        }, e.spellRemove = function(i) {
            var a = e.profiles[e.activeProfile.name];
            if (a.spells !== t && -1 !== a.spells.indexOf(i)) return e.uiAlertDisplay("You can not remove a starting Spell.", "danger"), !1;
            var r = -1;
            for (var n in e.activeProfile.spells)
                if (e.activeProfile.spells[n].name === i) {
                    r = n;
                    break
                }
            return -1 !== r ? (e.activeProfile.spells.splice(r, 1), !0) : !1
        }, e.spellChangeVersion = function(i, a) {
            var r = !0,
                n = !1,
                l = t;
            try {
                for (var o, s = e.activeProfile.spells[Symbol.iterator](); !(r = (o = s.next()).done); r = !0) {
                    var c = o.value;
                    if (c.name === i) {
                        var u = e.spells[c.name];
                        if ("mastery" === a) {
                            var f = e.spellpointsRemaining();
                            if (f -= u.cost.mastery, 0 > f) return void e.uiAlertDisplay("You have not enough spellpoints to change this spell version.", "danger")
                        }
                        return void(c.version = a)
                    }
                }
            } catch (p) {
                n = !0, l = p
            } finally {
                try {
                    !r && s["return"] && s["return"]()
                } finally {
                    if (n) throw l
                }
            }
        }, e.spellViewUpdate = function() {
            $("#spellpoints-remaining").text(e.spellpointsRemaining() + "  unspent Spellpoints"), $("#spellslots-remaining").text(e.activeProfile.spells.length + " / 5 Spellslots used"), $(".spell-row").remove();
            var i = !0,
                a = !1,
                r = t;
            try {
                for (var n, l = e.activeProfile.spells[Symbol.iterator](); !(i = (n = l.next()).done); i = !0) {
                    var o = n.value,
                        s = e.spells[o.name],
                        c = s.attribute.charAt(0).toUpperCase() + s.attribute.slice(1) + " " + s.requirements[o.version],
                        u = "passed";
                    e.activeProfile.attributes[s.attribute].value < s.requirements[o.version] && (u = "failed");
                    var f = /([+-]{0,1}[0-9]+%{0,1})/g,
                        p = "<span>$1</span>",
                        v = s.description.basic;
                    v = v.replace(f, p);
                    var m = s.description.mastery;
                    m = m.replace(f, p);
                    var d = "";
                    s.icon.length && (d = "images/icons/spells/mordheim_icons_spells_" + s.icon + ".png");
                    var y = /([0-9]+)m{0,1}/g,
                        h = "$1 meters",
                        b = s.info.range;
                    b = b.replace(y, h);
                    var k = e.templates.point.offense.repeat(s.info.cost.offense),
                        P = {
                            ability: "spell",
                            name: o.name,
                            title: s.name,
                            requirement: c,
                            requirementClass: u,
                            icon: d,
                            basic: v,
                            mastery: m,
                            range: b,
                            duration: s.info.duration,
                            target: s.info.target,
                            cost: k,
                            remove: !0,
                            casting_chance: s.info.casting_chance
                        };
                    s.info.tzeentchs_curse !== t && (P.tzeentchs_curse = s.info.tzeentchs_curse), s.info.divine_wrath !== t && (P.divine_wrath = s.info.divine_wrath), e.profiles[e.activeProfile.name].spells !== t && -1 !== e.profiles[e.activeProfile.name].spells.indexOf(o.name) && (P.remove = !1);
                    var g = e.templates.skill(P);
                    g = $(g), g.find(".spell-select-version").val(o.version), $("#spells-table").find("tr").eq(-1).before(g)
                }
            } catch (w) {
                a = !0, r = w
            } finally {
                try {
                    !i && l["return"] && l["return"]()
                } finally {
                    if (a) throw r
                }
            }
        }, e.mutationAdd = function(i) {
            if (e.profiles[e.activeProfile.name].restrictions.mutations === t) return e.uiAlertDisplay("This unit can not learn mutations.", "danger"), !1;
            if (e.activeProfile.mutations.length === e.slots.mutations) return e.uiAlertDisplay("You can only learn " + e.slots.mutations + " mutations.", "danger"), !1;
            if (e.mutations === t || e.mutations[i] === t) return !1;
            if (e.activeProfile.mutations.length > 0) {
                var a = !0,
                    r = !1,
                    n = t;
                try {
                    for (var l, o = e.activeProfile.mutations[Symbol.iterator](); !(a = (l = o.next()).done); a = !0) {
                        var s = l.value;
                        if (s.name === i) return e.uiAlertDisplay("Mutation already learned.", "danger"), !1
                    }
                } catch (c) {
                    r = !0, n = c
                } finally {
                    try {
                        !a && o["return"] && o["return"]()
                    } finally {
                        if (r) throw n
                    }
                }
            }
            var u = e.mutations[i].slot,
                f = !0;
            if (e.activeProfile.mutations.forEach(function(e) {
                    e.slot === u && (f = !1)
                }), !f) return e.uiAlertDisplay("Mutation slot already used.", "danger"), !1;
            var p = {
                name: i,
                slot: u
            };
            return e.activeProfile.mutations.push(p), "right_arm" === p.slot ? e.activeProfile.equipment.mainhand = !1 : "left_arm" === p.slot && (e.activeProfile.equipment.offhand = !1), !0
        }, e.mutationRemove = function(t) {
            var i = -1;
            for (var a in e.activeProfile.mutations)
                if (e.activeProfile.mutations[a].name === t) {
                    i = a;
                    break
                }
            return -1 !== i ? (e.activeProfile.mutations.splice(i, 1), !0) : !1
        }, e.mutationViewUpdate = function() {
            $("#mutations-remaining").text(e.activeProfile.mutations.length + " / 3 Mutations"), $(".mutation-row").remove();
            var i = !0,
                a = !1,
                r = t;
            try {
                for (var n, l = e.activeProfile.mutations[Symbol.iterator](); !(i = (n = l.next()).done); i = !0) {
                    var o = n.value,
                        s = e.mutations[o.name],
                        c = /([+-]{0,1}[0-9]+%{0,1})/g,
                        u = "<span>$1</span>",
                        f = s.description;
                    f = f.replace(c, u);
                    var p = s.slot;
                    p = p.replace(/_/g, " "), p = p.replace(/\w\S*/g, function(e) {
                        return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
                    });
                    var v = {
                            ability: "mutation",
                            name: o.name,
                            title: s.name,
                            slot: p,
                            basic: f,
                            remove: !0
                        },
                        m = e.templates.skill(v);
                    m = $(m), $("#mutations-table").find("tr").eq(-1).before(m)
                }
            } catch (d) {
                a = !0, r = d
            } finally {
                try {
                    !i && l["return"] && l["return"]()
                } finally {
                    if (a) throw r
                }
            }
        }, e.equipmentAdd = function(i, a) {
            if (e.equipment === t || e.equipment.weapon[i] === t && e.equipment.armour[i] === t) return !1;
            var r = e.equipment.weapon[i] || e.equipment.armour[i];
            if (r.twohanded !== t && (e.activeProfile.equipment.offhand = !1), r.restrictions !== t)
                for (var n in r.restrictions) - 1 === r.restrictions[n].indexOf(e.activeProfile.equipment[n].name) && (e.activeProfile.equipment[n] = !1);
            var l = {
                name: i,
                version: "normal"
            };
            return e.activeProfile.equipment[a] = l, !0
        }, e.equipmentRemove = function(t) {
            return e.activeProfile.equipment[t] = !1, !0
        }, e.equipmentChangeVersion = function(t, i) {
            return e.activeProfile.equipment[i] === !1 ? !1 : (e.activeProfile.equipment[i].version = t, !0)
        }, e.equipmentViewUpdate = function() {
            var i = Object.keys(e.activeProfile.equipment).map(function(e) {
                return ".equipment-" + e + "-row"
            }).join(", ");
            $(i).remove();
            for (var a in e.activeProfile.equipment)
                if (e.activeProfile.equipment[a] !== !1) {
                    var r = e.activeProfile.equipment[a],
                        n = e.equipment.weapon[r.name] || e.equipment.armour[r.name],
                        l = Handlebars.compile(n.description),
                        o = l(n.effects[r.version]),
                        s = /([+-]{0,1}[0-9]+[%m]{0,1})/g,
                        c = "<span>$1</span>";
                    o = o.replace(s, c), s = /([\w ]+\:{1})/g, c = '<span class="ability-option-label">$1</span>', o = o.replace(s, c);
                    var u = {
                        ability: "equipment-" + a,
                        name: r.name,
                        title: n.name,
                        basic: o,
                        remove: !0,
                        equipment: !0,
                        initiative: n.initiative,
                        quality: r.version
                    };
                    u.initiative > 0 && (u.initiative = "+" + u.initiative), n.effects[r.version].damage !== t && (u.damage = n.effects[r.version].damage), n.effects[r.version].armour !== t && (u.armour = n.effects[r.version].armour + "%"), n.effects.good === t && (u.quality = !1);
                    var f = e.templates.skill(u);
                    f = $(f), $("#equipment-" + a + "-table").find("tr").eq(-1).before(f)
                }
        }, e.injuryHandleEffects = function(i, a) {
            if (1 === a || -1 === a) {
                if ("severed_arm" === i && (e.activeProfile.equipment.offhand = !1, e.activeProfile.equipment.mainhand !== !1)) {
                    var r = e.equipment.weapon[e.activeProfile.equipment.mainhand.name];
                    r.twohanded !== t && (e.activeProfile.equipment.mainhand = !1)
                }
                if (e.injuries[i].effects !== t)
                    for (var n in e.injuries[i].effects) {
                        var l = e.injuries[i].effects[n];
                        l *= a, "points_offense" !== n ? "points_strategy" !== n ? e.activeProfile.attributes[n] === t || (e.activeProfile.attributes[n].value += l, e.activeProfile.attributes[n].min.current += l, e.activeProfile.attributes[n].max.current += l) : e.activeProfile.points.strategy.current += l : e.activeProfile.points.offense.current += l
                    }
            }
        }, e.injuryAdd = function(i) {
            return e.injuries === t || e.injuries[i] === t ? !1 : e.activeProfile.injuries.indexOf(i) >= 0 ? (e.uiAlertDisplay("Injury already added.", "danger"), !1) : (e.injuryHandleEffects(i, 1), e.activeProfile.injuries.push(i), !0)
        }, e.injuryRemove = function(t) {
            var i = e.activeProfile.injuries.indexOf(t);
            return i >= 0 ? (e.injuryHandleEffects(t, -1), e.activeProfile.injuries.splice(i, 1), !0) : !1
        }, e.injuryViewUpdate = function() {
            $(".injury-row").remove();
            var i = !0,
                a = !1,
                r = t;
            try {
                for (var n, l = e.activeProfile.injuries[Symbol.iterator](); !(i = (n = l.next()).done); i = !0) {
                    var o = n.value,
                        s = e.injuries[o],
                        c = /([+-]{0,1}[0-9]+%{0,1})/g,
                        u = "<span>$1</span>",
                        f = s.description;
                    f = f.replace(c, u);
                    var p = {
                            ability: "injury",
                            name: o,
                            title: s.name,
                            basic: f,
                            remove: !0
                        },
                        v = e.templates.skill(p);
                    v = $(v), $("#injury-table").find("tbody").append(v)
                }
            } catch (m) {
                a = !0, r = m
            } finally {
                try {
                    !i && l["return"] && l["return"]()
                } finally {
                    if (a) throw r
                }
            }
        }, e.booksHandleEffects = function(i, a) {
            if (1 !== a && -1 !== a) return !1;
            if (e.books[i].effects === t) return !0;
            for (var r in e.books[i].effects) {
                var n = e.books[i].effects[r];
                n *= a, "skillpoints" !== r ? "spellpoints" !== r ? e.activeProfile.attributepoints[r] === t ? e.activeProfile.attributes[r] === t || (e.activeProfile.attributes[r].max.current += n) : e.activeProfile.attributepoints[r].current += n : e.activeProfile.spellpoints.current += n : e.activeProfile.skillpoints.current += n
            }
            return !0
        }, e.booksAdd = function(i) {
            return e.books === t || e.books[i] === t ? !1 : e.activeProfile.books.indexOf(i) >= 0 ? (e.uiAlertDisplay("Book already added.", "danger"), !1) : (e.booksHandleEffects(i, 1), e.activeProfile.books.push(i), !0)
        }, e.booksRemove = function(i) {
            if (e.books === t || e.books[i] === t) return !1;
            var a = e.activeProfile.books.indexOf(i);
            if (a >= 0) {
                var r = e.books[i];
                if (r.effects !== t) {
                    var n = e.skillpointsRemaining();
                    if (r.effects.skillpoints !== t && (n -= r.effects.skillpoints), 0 > n) return e.uiAlertDisplay("Not enough skillpoints for remaining skills. Remove a skill first.", "danger"), !1;
                    var l = e.spellpointsRemaining();
                    if (r.effects.spellpoints !== t && (l -= r.effects.spellpoints), 0 > l) return e.uiAlertDisplay("Not enough spellpoints for remaining spells. Remove a spell first.", "danger"), !1;
                    for (var o in e.activeProfile.attributepoints) {
                        var s = e.activeProfile.attributepoints[o].current;
                        if (r.effects[o] !== t && (s -= r.effects[o]), 0 > s) return e.uiAlertDisplay('You have spend to much attributepoints to remove this book. Decrease a "' + o + '" attribute first.', "danger"), !1
                    }
                    for (var c in e.activeProfile.attributes) {
                        var u = e.activeProfile.attributes[c].max.current;
                        if (r.effects[c] !== t && (u -= r.effects[c]), e.activeProfile.attributes[c].value > u) return e.uiAlertDisplay('You have spend to much attribute points to remove this book. Decrease "' + c + '" first.', "danger"), !1
                    }
                    e.booksHandleEffects(i, -1)
                }
                return e.activeProfile.books.splice(a, 1), !0
            }
            return !1
        }, e.booksViewUpdate = function() {
            $(".book-row").remove();
            var i = !0,
                a = !1,
                r = t;
            try {
                for (var n, l = e.activeProfile.books[Symbol.iterator](); !(i = (n = l.next()).done); i = !0) {
                    var o = n.value,
                        s = e.books[o],
                        c = /([+-]{0,1}[0-9]+%{0,1})/g,
                        u = "<span>$1</span>",
                        f = s.description;
                    f = f.replace(c, u);
                    var p = {
                            ability: "book",
                            name: o,
                            title: s.name,
                            basic: f,
                            remove: !0
                        },
                        v = e.templates.skill(p);
                    v = $(v), $("#book-table").find("tbody").append(v)
                }
            } catch (m) {
                a = !0, r = m
            } finally {
                try {
                    !i && l["return"] && l["return"]()
                } finally {
                    if (a) throw r
                }
            }
        }, e.resistancesViewUpdate = function() {
            for (var i in e.activeProfile.resistances) {
                var a = $("#resistances-value-" + i);
                if (a.length) {
                    var r = e.activeProfile.resistances[i];
                    for (var n in e.attributes)
                        if (e.attributes[n].resistances !== t && e.attributes[n].resistances[i] !== t) {
                            var l = e.activeProfile.attributes[n].value;
                            l *= e.attributes[n].resistances[i], r += l
                        }
                    var o = !0,
                        s = !1,
                        c = t;
                    try {
                        for (var u, f = e.activeProfile.skills[Symbol.iterator](); !(o = (u = f.next()).done); o = !0) {
                            var p = u.value,
                                v = e.skills[p.type][p.name];
                            if (v.effects !== t && v.effects[p.version][i] !== t) {
                                if (v.effects.restrictions !== t) {
                                    var m = !1;
                                    for (var d in e.activeProfile.equipment)
                                        if (e.activeProfile.equipment[d] !== !1 && -1 !== v.effects.restrictions.indexOf(e.activeProfile.equipment[d].name)) {
                                            m = !0;
                                            break
                                        }
                                    if (!m) continue
                                }
                                var l = v.effects[p.version][i];
                                r += l
                            }
                        }
                    } catch (y) {
                        s = !0, c = y
                    } finally {
                        try {
                            !o && f["return"] && f["return"]()
                        } finally {
                            if (s) throw c
                        }
                    }
                    var h = !0,
                        b = !1,
                        k = t;
                    try {
                        for (var P, g = e.activeProfile.mutations[Symbol.iterator](); !(h = (P = g.next()).done); h = !0) {
                            var w = P.value,
                                q = e.mutations[w.name];
                            if (q.effects !== t && q.effects[i] !== t) {
                                var l = q.effects[i];
                                r += l
                            }
                        }
                    } catch (y) {
                        b = !0, k = y
                    } finally {
                        try {
                            !h && g["return"] && g["return"]()
                        } finally {
                            if (b) throw k
                        }
                    }
                    var x = !0,
                        S = !1,
                        A = t;
                    try {
                        for (var _, j = e.activeProfile.injuries[Symbol.iterator](); !(x = (_ = j.next()).done); x = !0) {
                            var O = _.value,
                                D = e.injuries[O];
                            if (D.effects !== t && D.effects[i] !== t) {
                                var l = D.effects[i];
                                r += l
                            }
                        }
                    } catch (y) {
                        S = !0, A = y
                    } finally {
                        try {
                            !x && j["return"] && j["return"]()
                        } finally {
                            if (S) throw A
                        }
                    }
                    for (var d in e.activeProfile.equipment)
                        if (e.activeProfile.equipment[d] !== !1) {
                            var U = e.equipment.weapon[e.activeProfile.equipment[d].name] || e.equipment.armour[e.activeProfile.equipment[d].name];
                            if (U.effects[e.activeProfile.equipment[d].version][i] !== t) {
                                var l = U.effects[e.activeProfile.equipment[d].version][i];
                                r += l
                            }
                        }
                    a.text(r + "%")
                }
            }
        }, e.otherViewUpdate = function() {
            for (var i in e.activeProfile.other) {
                var a = $("#other-value-" + i);
                if (a.length) {
                    var r = e.activeProfile.other[i];
                    for (var n in e.attributes) {
                        var l = e.attributes[n];
                        if (l.effects !== t && l.effects[i] !== t) {
                            var o = e.activeProfile.attributes[n].value;
                            o *= l.effects[i], r += o
                        }
                    }
                    var s = !0,
                        c = !1,
                        u = t;
                    try {
                        for (var f, p = e.activeProfile.skills[Symbol.iterator](); !(s = (f = p.next()).done); s = !0) {
                            var v = f.value,
                                m = e.skills[v.type][v.name];
                            if (m.effects !== t && m.effects[v.version][i] !== t) {
                                if (m.effects.restrictions !== t) {
                                    var d = !1;
                                    for (var y in e.activeProfile.equipment)
                                        if (e.activeProfile.equipment[y] !== !1 && -1 !== m.effects.restrictions.indexOf(e.activeProfile.equipment[y].name)) {
                                            d = !0;
                                            break
                                        }
                                    if (!d) continue
                                }
                                var o = m.effects[v.version][i];
                                r += o
                            }
                        }
                    } catch (h) {
                        c = !0, u = h
                    } finally {
                        try {
                            !s && p["return"] && p["return"]()
                        } finally {
                            if (c) throw u
                        }
                    }
                    var b = !0,
                        k = !1,
                        P = t;
                    try {
                        for (var g, w = e.activeProfile.mutations[Symbol.iterator](); !(b = (g = w.next()).done); b = !0) {
                            var q = g.value,
                                x = e.mutations[q.name];
                            if (x.effects !== t && x.effects[i] !== t) {
                                var o = x.effects[i];
                                r += o
                            }
                        }
                    } catch (h) {
                        k = !0, P = h
                    } finally {
                        try {
                            !b && w["return"] && w["return"]()
                        } finally {
                            if (k) throw P
                        }
                    }
                    var S = !0,
                        A = !1,
                        _ = t;
                    try {
                        for (var j, O = e.activeProfile.injuries[Symbol.iterator](); !(S = (j = O.next()).done); S = !0) {
                            var D = j.value,
                                U = e.injuries[D];
                            if (U.effects !== t && U.effects[i] !== t) {
                                var o = U.effects[i];
                                r += o
                            }
                        }
                    } catch (h) {
                        A = !0, _ = h
                    } finally {
                        try {
                            !S && O["return"] && O["return"]()
                        } finally {
                            if (A) throw _
                        }
                    }
                    for (var y in e.activeProfile.equipment)
                        if (e.activeProfile.equipment[y] !== !1) {
                            var V = e.equipment.weapon[e.activeProfile.equipment[y].name] || e.equipment.armour[e.activeProfile.equipment[y].name],
                                o = 0;
                            if ("initiative" === i) o = V.initiative;
                            else {
                                if (V.effects[e.activeProfile.equipment[y].version][i] === t) continue;
                                o = V.effects[e.activeProfile.equipment[y].version][i]
                            }
                            r += o
                        }("dodge" === i || "parry" === i) && (r += "%"), "movement" === i && (r += "m"), a.text(r)
                }
            }
        }, e.generalViewUpdate = function() {
            var i = $("#general-value-wounds"),
                a = e.activeProfile.wounds,
                r = 1 + e.activeProfile.attributes.toughness.value * e.attributes.toughness.effects.wounds / 100;
            a += e.activeProfile.rank * e.mechanics.woundsModifier;
            var n = !0,
                l = !1,
                o = t;
            try {
                for (var s, c = e.activeProfile.skills[Symbol.iterator](); !(n = (s = c.next()).done); n = !0) {
                    var u = s.value,
                        f = e.skills[u.type][u.name];
                    f.effects !== t && f.effects[u.version].wounds !== t && (a += f.effects[u.version].wounds)
                }
            } catch (p) {
                l = !0, o = p
            } finally {
                try {
                    !n && c["return"] && c["return"]()
                } finally {
                    if (l) throw o
                }
            }
            var v = !0,
                m = !1,
                d = t;
            try {
                for (var y, h = e.activeProfile.injuries[Symbol.iterator](); !(v = (y = h.next()).done); v = !0) {
                    var b = y.value,
                        k = e.injuries[b];
                    k.effects !== t && k.effects.wounds !== t && (a += k.effects.wounds)
                }
            } catch (p) {
                m = !0, d = p
            } finally {
                try {
                    !v && h["return"] && h["return"]()
                } finally {
                    if (m) throw d
                }
            }
            a *= r, a = Math.round(a), i.text(a);
            var P = $("#general-value-damage"),
                g = !1,
                w = "melee_damage",
                q = {
                    min: 0,
                    max: 0
                };
            if (e.activeProfile.equipment.mainhand !== !1) {
                var x = e.equipment.weapon[e.activeProfile.equipment.mainhand.name];
                q.min += x.effects[e.activeProfile.equipment.mainhand.version].damage.min, q.max += x.effects[e.activeProfile.equipment.mainhand.version].damage.max, x.dual_wield !== t && (g = !0), "ranged" === x.type && (w = "ranged_damage")
            }
            if (e.activeProfile.equipment.offhand !== !1) {
                var x = e.equipment.weapon[e.activeProfile.equipment.offhand.name];
                x.effects[e.activeProfile.equipment.offhand.version].damage !== t && (q.min += x.effects[e.activeProfile.equipment.offhand.version].damage.min, q.max += x.effects[e.activeProfile.equipment.offhand.version].damage.max), e.activeProfile.equipment.mainhand !== !1 && "melee" == x.type && (g = !0)
            }
            if ("melee_damage" === w) {
                q.min *= 1 + e.activeProfile.attributes.strength.value * e.attributes.strength.effects[w] / 100, q.max *= 1 + e.activeProfile.attributes.strength.value * e.attributes.strength.effects[w] / 100;
                var S = !0,
                    A = !1,
                    _ = t;
                try {
                    for (var j, O = e.activeProfile.mutations[Symbol.iterator](); !(S = (j = O.next()).done); S = !0) {
                        var D = j.value,
                            U = e.mutations[D.name];
                        U.effects !== t && U.effects.melee_damage !== t && (q.min *= 1 + U.effects.melee_damage / 100, q.max *= 1 + U.effects.melee_damage / 100)
                    }
                } catch (p) {
                    A = !0, _ = p
                } finally {
                    try {
                        !S && O["return"] && O["return"]()
                    } finally {
                        if (A) throw _
                    }
                }
                g && (q.min *= e.mechanics.dualWieldModifier, q.max *= e.mechanics.dualWieldModifier)
            } else "ranged_damage" === w && (q.min *= 1 + e.activeProfile.attributes.ballistic_skill.value * e.attributes.ballistic_skill.effects[w] / 100, q.max *= 1 + e.activeProfile.attributes.ballistic_skill.value * e.attributes.ballistic_skill.effects[w] / 100);
            P.text(Math.round(q.min) + " - " + Math.round(q.max));
            var V = $("#general-value-armour"),
                C = 0,
                H = !0,
                R = !1,
                M = t;
            try {
                for (var E, B = e.activeProfile.skills[Symbol.iterator](); !(H = (E = B.next()).done); H = !0) {
                    var u = E.value,
                        f = e.skills[u.type][u.name];
                    if (f.effects !== t && f.effects[u.version].armour !== t) {
                        if (f.effects.restrictions !== t) {
                            var N = !1;
                            for (var L in e.activeProfile.equipment)
                                if (e.activeProfile.equipment[L] !== !1 && -1 !== f.effects.restrictions.indexOf(e.activeProfile.equipment[L].name)) {
                                    N = !0;
                                    break
                                }
                            if (!N) continue
                        }
                        C += f.effects[u.version].armour
                    }
                }
            } catch (p) {
                R = !0, M = p
            } finally {
                try {
                    !H && B["return"] && B["return"]()
                } finally {
                    if (R) throw M
                }
            }
            for (var L in e.activeProfile.equipment)
                if (e.activeProfile.equipment[L] !== !1) {
                    var x = e.equipment.weapon[e.activeProfile.equipment[L].name] || e.equipment.armour[e.activeProfile.equipment[L].name];
                    if (x.effects[e.activeProfile.equipment[L].version].armour !== t) {
                        var I = x.effects[e.activeProfile.equipment[L].version].armour;
                        C += I
                    }
                }
            V.text(C + "%");
            var T = $("#general-value-critical-hit"),
                Y = e.mechanics.criticalHit;
            Y += e.activeProfile.attributes.accuracy.value * e.attributes.accuracy.effects.critical_hit_chance;
            var J = !0,
                Q = !1,
                W = t;
            try {
                for (var z, F = e.activeProfile.skills[Symbol.iterator](); !(J = (z = F.next()).done); J = !0) {
                    var u = z.value,
                        f = e.skills[u.type][u.name];
                    if (f.effects !== t && f.effects[u.version].critical_hit_chance !== t) {
                        if (f.effects.restrictions !== t) {
                            var N = !1;
                            for (var L in e.activeProfile.equipment)
                                if (e.activeProfile.equipment[L] !== !1 && -1 !== f.effects.restrictions.indexOf(e.activeProfile.equipment[L].name)) {
                                    N = !0;
                                    break
                                }
                            if (!N) continue
                        }
                        Y += f.effects[u.version].critical_hit_chance
                    }
                }
            } catch (p) {
                Q = !0, W = p
            } finally {
                try {
                    !J && F["return"] && F["return"]()
                } finally {
                    if (Q) throw W
                }
            }
            var G = !0,
                K = !1,
                X = t;
            try {
                for (var Z, ee = e.activeProfile.mutations[Symbol.iterator](); !(G = (Z = ee.next()).done); G = !0) {
                    var D = Z.value,
                        U = e.mutations[D.name];
                    U.effects !== t && U.effects.critical_hit_chance !== t && (Y += U.effects.critical_hit_chance)
                }
            } catch (p) {
                K = !0, X = p
            } finally {
                try {
                    !G && ee["return"] && ee["return"]()
                } finally {
                    if (K) throw X
                }
            }
            for (var L in e.activeProfile.equipment)
                if (e.activeProfile.equipment[L] !== !1) {
                    var x = e.equipment.weapon[e.activeProfile.equipment[L].name] || e.equipment.armour[e.activeProfile.equipment[L].name];
                    if (x.effects[e.activeProfile.equipment[L].version].critical_hit_chance !== t) {
                        var te = x.effects[e.activeProfile.equipment[L].version].critical_hit_chance;
                        Y += te
                    }
                }
            T.text(Y + "%")
        }, e.hashSaveBuild = function() {
            var t = {
                profile: e.activeProfile.name,
                attributes: {
                    strength: e.activeProfile.attributes.strength.value - e.activeProfile.attributes.strength.min.current,
                    toughness: e.activeProfile.attributes.toughness.value - e.activeProfile.attributes.toughness.min.current,
                    agility: e.activeProfile.attributes.agility.value - e.activeProfile.attributes.agility.min.current,
                    leadership: e.activeProfile.attributes.leadership.value - e.activeProfile.attributes.leadership.min.current,
                    intelligence: e.activeProfile.attributes.intelligence.value - e.activeProfile.attributes.intelligence.min.current,
                    alertness: e.activeProfile.attributes.alertness.value - e.activeProfile.attributes.alertness.min.current,
                    weapon_skill: e.activeProfile.attributes.weapon_skill.value - e.activeProfile.attributes.weapon_skill.min.current,
                    ballistic_skill: e.activeProfile.attributes.ballistic_skill.value - e.activeProfile.attributes.ballistic_skill.min.current,
                    accuracy: e.activeProfile.attributes.accuracy.value - e.activeProfile.attributes.accuracy.min.current
                },
                equipment: e.activeProfile.equipment,
                skills: [],
                spells: [],
                mutations: [],
                injuries: [],
                books: []
            };
            return t.skills = e.activeProfile.skills, t.spells = e.activeProfile.spells, t.mutations = e.activeProfile.mutations, t.injuries = e.activeProfile.injuries, t.books = e.activeProfile.books, t
        }, e.hashSaveLoad = function(i) {
            e.profileLoad(i.profile);
            var a = !0,
                r = !1,
                n = t;
            try {
                for (var l, o = i.books[Symbol.iterator](); !(a = (l = o.next()).done); a = !0) {
                    var s = l.value;
                    e.books[s] !== t && e.booksAdd(s)
                }
            } catch (c) {
                r = !0, n = c
            } finally {
                try {
                    !a && o["return"] && o["return"]()
                } finally {
                    if (r) throw n
                }
            }
            var u = !0,
                f = !1,
                p = t;
            try {
                for (var v, m = i.skills[Symbol.iterator](); !(u = (v = m.next()).done); u = !0) {
                    var d = v.value;
                    (e.skills.active[d.name] !== t || e.skills.passive[d.name] !== t) && (e.skillAdd(d.name, d.type), "mastery" === d.version && e.skillChangeVersion(d.name, "mastery"))
                }
            } catch (c) {
                f = !0, p = c
            } finally {
                try {
                    !u && m["return"] && m["return"]()
                } finally {
                    if (f) throw p
                }
            }
            var y = !0,
                h = !1,
                b = t;
            try {
                for (var k, P = i.spells[Symbol.iterator](); !(y = (k = P.next()).done); y = !0) {
                    var g = k.value;
                    e.spells[g.name] !== t && (e.spellAdd(g.name), "mastery" === g.version && e.spellChangeVersion(g.name, "mastery"))
                }
            } catch (c) {
                h = !0, b = c
            } finally {
                try {
                    !y && P["return"] && P["return"]()
                } finally {
                    if (h) throw b
                }
            }
            var w = !0,
                q = !1,
                $ = t;
            try {
                for (var x, S = i.mutations[Symbol.iterator](); !(w = (x = S.next()).done); w = !0) {
                    var A = x.value;
                    e.mutations[A.name] !== t && e.mutationAdd(A.name)
                }
            } catch (c) {
                q = !0, $ = c
            } finally {
                try {
                    !w && S["return"] && S["return"]()
                } finally {
                    if (q) throw $
                }
            }
            var _ = !0,
                j = !1,
                O = t;
            try {
                for (var D, U = i.injuries[Symbol.iterator](); !(_ = (D = U.next()).done); _ = !0) {
                    var V = D.value;
                    e.injuries[V] !== t && e.injuryAdd(V)
                }
            } catch (c) {
                j = !0, O = c
            } finally {
                try {
                    !_ && U["return"] && U["return"]()
                } finally {
                    if (j) throw O
                }
            }
            for (var C in i.attributes) e.attributeUpdate(C, i.attributes[C]);
            e.activeProfile.equipment = i.equipment
        }, e.hashDecodeProfile = function(i) {
            var a = JSON.parse(JSON.stringify(e.saveProfile));
            a.profile = i.p, a.attributes.strength = i.a.s, a.attributes.toughness = i.a.t, a.attributes.agility = i.a.ag, a.attributes.leadership = i.a.l, a.attributes.intelligence = i.a.i, a.attributes.alertness = i.a.al, a.attributes.weapon_skill = i.a.w, a.attributes.ballistic_skill = i.a.b, a.attributes.accuracy = i.a.ac;
            var r = !0,
                n = !1,
                l = t;
            try {
                for (var o, s = i.sk[Symbol.iterator](); !(r = (o = s.next()).done); r = !0) {
                    var c = o.value,
                        u = {
                            name: c.n,
                            type: 1 === c.t ? "active" : "passive",
                            version: 1 === c.v ? "mastery" : "basic"
                        };
                    a.skills.push(u)
                }
            } catch (f) {
                n = !0, l = f
            } finally {
                try {
                    !r && s["return"] && s["return"]()
                } finally {
                    if (n) throw l
                }
            }
            if (i.sp !== t) {
                var p = !0,
                    v = !1,
                    m = t;
                try {
                    for (var d, y = i.sp[Symbol.iterator](); !(p = (d = y.next()).done); p = !0) {
                        var h = d.value,
                            b = {
                                name: h.n,
                                version: 1 === h.v ? "mastery" : "basic"
                            };
                        a.spells.push(b)
                    }
                } catch (f) {
                    v = !0, m = f
                } finally {
                    try {
                        !p && y["return"] && y["return"]()
                    } finally {
                        if (v) throw m
                    }
                }
            }
            if (i.m !== t) {
                var k = !0,
                    P = !1,
                    g = t;
                try {
                    for (var w, q = i.m[Symbol.iterator](); !(k = (w = q.next()).done); k = !0) {
                        var $ = w.value,
                            x = {
                                name: $.n,
                                slot: $.s
                            };
                        a.mutations.push(x)
                    }
                } catch (f) {
                    P = !0, g = f
                } finally {
                    try {
                        !k && q["return"] && q["return"]()
                    } finally {
                        if (P) throw g
                    }
                }
            }
            if (i.i !== t) {
                var S = !0,
                    A = !1,
                    _ = t;
                try {
                    for (var j, O = i.i[Symbol.iterator](); !(S = (j = O.next()).done); S = !0) {
                        var D = j.value;
                        a.injuries.push(D)
                    }
                } catch (f) {
                    A = !0, _ = f
                } finally {
                    try {
                        !S && O["return"] && O["return"]()
                    } finally {
                        if (A) throw _
                    }
                }
            }
            if (i.b !== t) {
                var U = !0,
                    V = !1,
                    C = t;
                try {
                    for (var H, R = i.b[Symbol.iterator](); !(U = (H = R.next()).done); U = !0) {
                        var M = H.value;
                        a.books.push(M)
                    }
                } catch (f) {
                    V = !0, C = f
                } finally {
                    try {
                        !U && R["return"] && R["return"]()
                    } finally {
                        if (V) throw C
                    }
                }
            }
            if (i.e !== t) {
                if (i.e.h !== t) {
                    var E = {
                        name: i.e.h.n,
                        version: i.e.h.v
                    };
                    a.equipment.head = E
                }
                if (i.e.b !== t) {
                    var B = {
                        name: i.e.b.n,
                        version: i.e.b.v
                    };
                    a.equipment.body = B
                }
                if (i.e.m !== t) {
                    var N = {
                        name: i.e.m.n,
                        version: i.e.m.v
                    };
                    a.equipment.mainhand = N
                }
                if (i.e.o !== t) {
                    var L = {
                        name: i.e.o.n,
                        version: i.e.o.v
                    };
                    a.equipment.offhand = L
                }
            }
            return a
        }, e.hashEncodeProfile = function(e) {
            var i = {
                    p: e.profile,
                    a: {
                        s: e.attributes.strength,
                        t: e.attributes.toughness,
                        ag: e.attributes.agility,
                        l: e.attributes.leadership,
                        i: e.attributes.intelligence,
                        al: e.attributes.alertness,
                        w: e.attributes.weapon_skill,
                        b: e.attributes.ballistic_skill,
                        ac: e.attributes.accuracy
                    },
                    e: {},
                    sk: [],
                    sp: [],
                    m: [],
                    i: [],
                    b: []
                },
                a = !0,
                r = !1,
                n = t;
            try {
                for (var l, o = e.skills[Symbol.iterator](); !(a = (l = o.next()).done); a = !0) {
                    var s = l.value,
                        c = {
                            n: s.name,
                            t: "active" === s.type ? 1 : 0,
                            v: "mastery" === s.version ? 1 : 0
                        };
                    i.sk.push(c)
                }
            } catch (u) {
                r = !0, n = u
            } finally {
                try {
                    !a && o["return"] && o["return"]()
                } finally {
                    if (r) throw n
                }
            }
            var f = !0,
                p = !1,
                v = t;
            try {
                for (var m, d = e.spells[Symbol.iterator](); !(f = (m = d.next()).done); f = !0) {
                    var y = m.value,
                        h = {
                            n: y.name,
                            v: "mastery" === y.version ? 1 : 0
                        };
                    i.sp.push(h)
                }
            } catch (u) {
                p = !0, v = u
            } finally {
                try {
                    !f && d["return"] && d["return"]()
                } finally {
                    if (p) throw v
                }
            }
            var b = !0,
                k = !1,
                P = t;
            try {
                for (var g, w = e.mutations[Symbol.iterator](); !(b = (g = w.next()).done); b = !0) {
                    var q = g.value,
                        $ = {
                            n: q.name,
                            s: q.slot
                        };
                    i.m.push($)
                }
            } catch (u) {
                k = !0, P = u
            } finally {
                try {
                    !b && w["return"] && w["return"]()
                } finally {
                    if (k) throw P
                }
            }
            var x = !0,
                S = !1,
                A = t;
            try {
                for (var _, j = e.injuries[Symbol.iterator](); !(x = (_ = j.next()).done); x = !0) {
                    var O = _.value;
                    i.i.push(O)
                }
            } catch (u) {
                S = !0, A = u
            } finally {
                try {
                    !x && j["return"] && j["return"]()
                } finally {
                    if (S) throw A
                }
            }
            var D = !0,
                U = !1,
                V = t;
            try {
                for (var C, H = e.books[Symbol.iterator](); !(D = (C = H.next()).done); D = !0) {
                    var R = C.value;
                    i.b.push(R)
                }
            } catch (u) {
                U = !0, V = u
            } finally {
                try {
                    !D && H["return"] && H["return"]()
                } finally {
                    if (U) throw V
                }
            }
            if (e.equipment.head !== !1) {
                var M = {
                    n: e.equipment.head.name,
                    v: e.equipment.head.version
                };
                i.e.h = M
            }
            if (e.equipment.body !== !1) {
                var E = {
                    n: e.equipment.body.name,
                    v: e.equipment.body.version
                };
                i.e.b = E
            }
            if (e.equipment.mainhand !== !1) {
                var B = {
                    n: e.equipment.mainhand.name,
                    v: e.equipment.mainhand.version
                };
                i.e.m = B
            }
            if (e.equipment.offhand !== !1) {
                var N = {
                    n: e.equipment.offhand.name,
                    v: e.equipment.offhand.version
                };
                i.e.o = N
            }
            return i
        }, e.hashUrlBuild = function() {
            var t = e.hashEncodeProfile(e.hashSaveBuild()),
                i = encodeURIComponent(window.btoa(JSON.stringify(t)));
            return i = window.location.origin + window.location.pathname + "#" + i
        }, e.hashUrlParse = function() {
            var t = window.location.hash.slice(1);
            try {
                t = JSON.parse(window.atob(decodeURIComponent(t))), e.hashSaveLoad(e.hashDecodeProfile(t))
            } catch (i) {
                return !1
            }
            return !0
        }, e.hashLocalStorageSave = function(i) {
            var a = [];
            localStorage.saves !== t && (a = JSON.parse(localStorage.saves));
            var r = {
                title: i,
                profile: e.hashSaveBuild()
            };
            return a.push(r), localStorage.saves = JSON.stringify(a), !0
        }, e.hashLocalStorageLoad = function(e) {
            if (localStorage.saves === t) return !1;
            var i = JSON.parse(localStorage.saves);
            return i[e] === t ? !1 : (i.slice(e, 1), localStorage.saves = JSON.stringify(i), !0)
        }, e.uiAlertDisplay = function(t, i) {
            e.uiAlertClear();
            var a = e.templates.notice({
                message: t,
                type: i
            });
            a = $(a), $("#panel-header").append(a), $(document).scrollTop() > $(".alert").offset().top - 15 && $("html, body").animate({
                scrollTop: $(".alert").offset().top - 15 + "px"
            }, "fast")
        }, e.uiAlertClear = function() {
            $(".alert").remove()
        }, e.uiSelectSkillClear = function() {
            $("#skill-select-active")[0].selectedIndex = 0, $("#skill-select-passive")[0].selectedIndex = 0
        }, e.uiHandlerSkills = function() {
            $(document).on("click", "#skill-action-add-active", function(i) {
                if (i.preventDefault(), e.uiAlertClear(), e.activeProfile.name === t || e.activeProfile.name.length <= 0) return e.uiAlertDisplay("Build a profile first.", "danger"), !1;
                var a = $("#skill-select-active").val(),
                    r = e.skillAdd(a, "active");
                r && (e.profileViewUpdate(), $("#panel-skills .ability-select option").prop("selected", !1))
            }), $(document).on("click", "#skill-action-add-passive", function(i) {
                if (i.preventDefault(), e.uiAlertClear(), e.activeProfile.name === t || e.activeProfile.name.length <= 0) return e.uiAlertDisplay("Build a profile first.", "danger"), !1;
                var a = $("#skill-select-passive").val(),
                    r = e.skillAdd(a, "passive");
                r && (e.profileViewUpdate(), $("#panel-skills .ability-select option").prop("selected", !1))
            }), $(document).on("change", ".skill-select-version", function(t) {
                t.preventDefault(), e.uiAlertClear();
                var i = $(this).val(),
                    a = $(this).data("ability-key");
                e.skillChangeVersion(a, i), e.profileViewUpdate()
            }), $(document).on("click", ".skill-action-remove", function(t) {
                t.preventDefault(), e.uiAlertClear();
                var i = $(this).data("ability-key"),
                    a = e.skillRemove(i);
                a && e.profileViewUpdate()
            })
        }, e.uiHandlerSpells = function() {
            $(document).on("click", "#spell-action-add", function(t) {
                t.preventDefault();
                var i = $("#spell-select").val();
                e.uiAlertClear();
                var a = e.spellAdd(i);
                a && (e.profileViewUpdate(), $("#panel-spells .ability-select option").prop("selected", !1))
            }), $(document).on("change", ".spell-select-version", function(t) {
                t.preventDefault(), e.uiAlertClear();
                var i = $(this).val(),
                    a = $(this).data("ability-key");
                e.spellChangeVersion(a, i), e.profileViewUpdate()
            }), $(document).on("click", ".spell-action-remove", function(t) {
                t.preventDefault(), e.uiAlertClear();
                var i = $(this).data("ability-key"),
                    a = e.spellRemove(i);
                a && e.profileViewUpdate()
            })
        }, e.uiHandlerMutations = function() {
            $(document).on("click", "#mutations-action-add", function(t) {
                t.preventDefault(), e.uiAlertClear();
                var i = $("#mutations-select").val(),
                    a = e.mutationAdd(i);
                a && (e.profileViewUpdate(), $("#panel-mutations .ability-select option").prop("selected", !1))
            }), $(document).on("click", ".mutation-action-remove", function(t) {
                t.preventDefault(), e.uiAlertClear();
                var i = $(this).data("ability-key"),
                    a = e.mutationRemove(i);
                a && e.profileViewUpdate()
            })
        }, e.uiHandlerInjuries = function() {
            $(document).on("click", "#injury-action-add", function(t) {
                t.preventDefault(), e.uiAlertClear();
                var i = $("#injury-select").val(),
                    a = e.injuryAdd(i);
                a && (e.profileViewUpdate(), $("#panel-injuries .ability-select option").prop("selected", !1))
            }), $(document).on("click", ".injury-action-remove", function(t) {
                t.preventDefault(), e.uiAlertClear();
                var i = $(this).data("ability-key"),
                    a = e.injuryRemove(i);
                a && e.profileViewUpdate()
            })
        }, e.uiHandlerBooks = function() {
            $(document).on("click", "#book-action-add", function(t) {
                t.preventDefault(), e.uiAlertClear();
                var i = $("#book-select").val(),
                    a = e.booksAdd(i);
                a && (e.profileViewUpdate(), $("#panel-books .ability-select option").prop("selected", !1))
            }), $(document).on("click", ".book-action-remove", function(t) {
                t.preventDefault(), e.uiAlertClear();
                var i = $(this).data("ability-key"),
                    a = e.booksRemove(i);
                a && e.profileViewUpdate()
            })
        }, e.uiHandlerEquipment = function() {
            $(document).on("click", "#equipment-mainhand-action-add", function(t) {
                t.preventDefault(), e.uiAlertClear();
                var i = $("#equipment-mainhand-select").val(),
                    a = e.equipmentAdd(i, "mainhand");
                a && (e.profileViewUpdate(), $("#panel-equipment-mainhand .ability-select option").prop("selected", !1))
            }), $(document).on("click", ".equipment-mainhand-action-remove", function(t) {
                t.preventDefault(), e.uiAlertClear();
                var i = e.equipmentRemove("mainhand");
                i && e.profileViewUpdate()
            }), $(document).on("change", ".equipment-mainhand-select-version", function(t) {
                t.preventDefault(), e.uiAlertClear();
                var i = $(this).val();
                e.equipmentChangeVersion(i, "mainhand"), e.profileViewUpdate()
            }), $(document).on("click", "#equipment-offhand-action-add", function(t) {
                t.preventDefault(), e.uiAlertClear();
                var i = $("#equipment-offhand-select").val(),
                    a = e.equipmentAdd(i, "offhand");
                a && (e.profileViewUpdate(), $("#panel-equipment-offhand .ability-select option").prop("selected", !1))
            }), $(document).on("click", ".equipment-offhand-action-remove", function(t) {
                t.preventDefault(), e.uiAlertClear();
                var i = e.equipmentRemove("offhand");
                i && e.profileViewUpdate()
            }), $(document).on("change", ".equipment-offhand-select-version", function(t) {
                t.preventDefault(), e.uiAlertClear();
                var i = $(this).val();
                e.equipmentChangeVersion(i, "offhand"), e.profileViewUpdate()
            }), $(document).on("click", "#equipment-body-action-add", function(t) {
                t.preventDefault(), e.uiAlertClear();
                var i = $("#equipment-body-select").val(),
                    a = e.equipmentAdd(i, "body");
                a && (e.profileViewUpdate(), $("#panel-equipment-body .ability-select option").prop("selected", !1))
            }), $(document).on("click", ".equipment-body-action-remove", function(t) {
                t.preventDefault(), e.uiAlertClear();
                var i = e.equipmentRemove("body");
                i && e.profileViewUpdate()
            }), $(document).on("change", ".equipment-body-select-version", function(t) {
                t.preventDefault(), e.uiAlertClear();
                var i = $(this).val();
                e.equipmentChangeVersion(i, "body"), e.profileViewUpdate()
            }), $(document).on("click", "#equipment-head-action-add", function(t) {
                t.preventDefault(), e.uiAlertClear();
                var i = $("#equipment-head-select").val(),
                    a = e.equipmentAdd(i, "head");
                a && (e.profileViewUpdate(), $("#panel-equipment-head .ability-select option").prop("selected", !1))
            }), $(document).on("click", ".equipment-head-action-remove", function(t) {
                t.preventDefault(), e.uiAlertClear();
                var i = e.equipmentRemove("head");
                i && e.profileViewUpdate()
            }), $(document).on("change", ".equipment-head-select-version", function(t) {
                t.preventDefault(), e.uiAlertClear();
                var i = $(this).val();
                e.equipmentChangeVersion(i, "head"), e.profileViewUpdate()
            })
        }, e.uiHandlerAttributes = function() {
            $(document).on("click", ".attribute-action-increase", function(t) {
                t.preventDefault();
                var i = $(this).data("attribute-key");
                e.attributeIncrease(i), e.profileViewUpdate()
            }), $(document).on("click", ".attribute-action-decrease", function(t) {
                t.preventDefault();
                var i = $(this).data("attribute-key");
                e.attributeDecrease(i), e.profileViewUpdate()
            })
        }, e.uiHandlerProfile = function() {
            $(document).on("change", "#profile-select", function(t) {
                t.preventDefault(), e.views.profileicons.hide(), e.views.profile.show(), $("html,body").scrollTop(0), e.profileLoad($(this).val()), e.profileViewInit(), e.profileViewUpdate(), window.location.hash && (window.location.hash = "")
            }), $(document).on("click", ".button-profile-icon", function(t) {
                t.preventDefault(), e.views.profileicons.hide(), e.views.profile.show(), $("html,body").scrollTop(0), e.profileLoad($(this).val()), e.profileViewInit(), e.profileViewUpdate(), window.location.hash && (window.location.hash = "")
            }), $(document).on("click", ".button-show-profile-icons", function(t) {
                t.preventDefault(), $(".button-hide-profile-icons").show(), e.views.profileicons.show(), e.views.profile.hide()
            }), $(document).on("click", ".button-hide-profile-icons", function(t) {
                t.preventDefault(), e.views.profileicons.hide(), e.views.profile.show()
            })
        }, e.uiHandlerDataLoaded = function() {
            $(document).on("MCotDPlanner_DataLoaded", function() {
                e.views.loading.hide(), e.hashUrlParse() ? (e.views.profile.show(), e.profileViewInit(), e.profileViewUpdate()) : e.views.profileicons.show()
            })
        }, e.uiHandlerButtonQuicklink = function() {
            $(document).on("show.bs.modal", "#mcotdp-modal-quicklink", function() {
                return e.activeProfile.name === t || e.activeProfile.name.length <= 0 ? (e.uiAlertDisplay("Build a profile first.", "danger"), !1) : void $(this).find("input").val(e.hashUrlBuild())
            }), $(document).on("hide.bs.modal", "#mcotdp-modal-quicklink", function() {
                $(".button-show-quicklink").blur()
            }), $("#mcotdp-modal-quicklink input").on("click", function() {
                this.select()
            })
        }, e.uiHandlerButtonQuicksummary = function() {
            $(document).on("show.bs.modal", "#mcotdp-modal-quicksummary", function() {
                return e.activeProfile.name === t || e.activeProfile.name.length <= 0 ? (e.uiAlertDisplay("Build a profile first.", "danger"), !1) : void $(this).find("textarea").text(e.uiQuicksummaryBuild().replace(/<br>/g, "\n"))
            }), $(document).on("hide.bs.modal", "#mcotdp-modal-quicksummary", function() {
                $(".button-show-summary").blur()
            })
        }, e.uiRestrictSpellSelect = function() {
            if (!(e.activeProfile.restrictions.spells.length < 1)) {
                $(".panel-spells .ability-select option").show(), $(".panel-spells .ability-select optgroup").hide();
                var t = "#spell-options-" + e.activeProfile.restrictions.spells[0].replace(/_/g, "-");
                $(t).show();
                var i = e.activeProfile.spells.map(function(e) {
                    return '.ability-select option[value="' + e.name + '"]'
                });
                i = i.join(", "), $(i).hide()
            }
        }, e.uiRestrictSkillSelect = function() {
            $(".panel-skills .ability-select option").show(), $(".panel-skills .ability-select optgroup").hide();
            var t = e.activeProfile.restrictions.skills.map(function(e) {
                return ".panel-skills .ability-select optgroup.skill-options-" + e.replace(/_/g, "-")
            });
            t = t.join(", "), t = $(t), t.show(), $("optgroup.skill-options-mixed option").hide();
            var i = e.activeProfile.restrictions.skills.map(function(e) {
                return ".panel-skills option.skill-options-" + e.replace(/_/g, "-")
            });
            i = i.join(", "), $(i).show(), $("optgroup.skill-options-mixed").show(), e.uiRemoveUnavailableSkills()
        }, e.uiRemoveUnavailableSkills = function() {
            var t = [];
            $(".panel-skills optgroup option").each(function() {
                "none" !== $(this).css("display") && t.push($(this).val())
            });
            var i = [];
            e.activeProfile.skills.forEach(function(a, r) {
                return "class" === e.skills[a.type][a.name].attribute ? void i.push(a) : -1 !== t.indexOf(a.name) ? void i.push(a) : void 0
            }), e.activeProfile.skills = i
        }, e.uiRestrictEquipmentSelect = function() {
            var i = {
                mainhand: e.activeProfile.restrictions.equipment.slice(),
                offhand: e.activeProfile.restrictions.equipment.slice(),
                head: e.activeProfile.restrictions.equipment.slice(),
                body: e.activeProfile.restrictions.equipment.slice()
            };
            if ("mutant" === e.activeProfile.name || "marauder" === e.activeProfile.name) {
                var a = !1,
                    r = !1,
                    n = !0,
                    l = !1,
                    o = t;
                try {
                    for (var s, c = e.activeProfile.mutations[Symbol.iterator](); !(n = (s = c.next()).done); n = !0) {
                        var u = s.value;
                        "right_arm" === u.slot ? a = !0 : "left_arm" === u.slot && (r = !0)
                    }
                } catch (f) {
                    l = !0, o = f
                } finally {
                    try {
                        !n && c["return"] && c["return"]()
                    } finally {
                        if (l) throw o
                    }
                }
                if (a) i.mainhand = ["armband"];
                else {
                    var p = i.mainhand.indexOf("armband"); - 1 !== p && i.mainhand.splice(p, 1)
                }
                if (r) i.offhand = ["armband"];
                else {
                    var p = i.offhand.indexOf("armband"); - 1 !== p && i.offhand.splice(p, 1)
                }
            }
            if (-1 !== e.activeProfile.injuries.indexOf("severed_arm")) {
                var v = [],
                    m = !0,
                    d = !1,
                    y = t;
                try {
                    for (var h, b = i.mainhand[Symbol.iterator](); !(m = (h = b.next()).done); m = !0) {
                        var k = h.value,
                            P = e.equipment.weapon[k] || e.equipment.armour[k];
                        P.twohanded === t && v.push(k)
                    }
                } catch (f) {
                    d = !0, y = f
                } finally {
                    try {
                        !m && b["return"] && b["return"]()
                    } finally {
                        if (d) throw y
                    }
                }
                i.mainhand = v.slice()
            }
            e.uiOptionShowOnly(i.mainhand, "equipment-mainhand"), e.uiOptionShowOnly(i.offhand, "equipment-offhand"), e.uiOptionShowOnly(i.head, "equipment-body"), e.uiOptionShowOnly(i.body, "equipment-head")
        }, e.uiRestrictMutationSelect = function() {
            if (!("object" !== _typeof(e.activeProfile.restrictions.mutations) || e.activeProfile.restrictions.mutations.length < 1)) {
                var i = !0,
                    a = !1,
                    r = t;
                try {
                    for (var n, l = e.activeProfile.restrictions.mutations[Symbol.iterator](); !(i = (n = l.next()).done); i = !0) {
                        var o = n.value;
                        e.uiOptionHide(o, "mutations")
                    }
                } catch (s) {
                    a = !0, r = s
                } finally {
                    try {
                        !i && l["return"] && l["return"]()
                    } finally {
                        if (a) throw r
                    }
                }
            }
        }, e.uiOptionHide = function(e, i) {
            if (!(e.length < 1)) {
                var a = i !== t ? "#panel-" + i : ".panel-ability";
                a += ' .ability-select option[value="' + e + '"]';
                var r = document.querySelector(a);
                null !== r && (r.style.display = "none")
            }
        }, e.uiOptionShow = function(e, i) {
            if (!(e.length < 1)) {
                var a = i !== t ? "#panel-" + i : ".panel-ability";
                a += ' .ability-select option[value="' + e + '"]';
                var r = document.querySelector(a);
                null !== r && (r.style.display = "block")
            }
        }, e.uiOptionShowOnly = function(i, a) {
            if ("string" == typeof i && (i = [i]), !(i.length < 1)) {
                var r = a !== t ? "#panel-" + a : ".panel-ability";
                $(r + " .ability-select optgroup, " + r + " .ability-select option").hide();
                var n = !0,
                    l = !1,
                    o = t;
                try {
                    for (var s, c = i[Symbol.iterator](); !(n = (s = c.next()).done); n = !0) {
                        var u = s.value;
                        e.uiOptgroupShow(u, a), e.uiOptionShow(u, a)
                    }
                } catch (f) {
                    l = !0, o = f
                } finally {
                    try {
                        !n && c["return"] && c["return"]()
                    } finally {
                        if (l) throw o
                    }
                }
                $(r + " .ability-select option")[0].style.display = "block"
            }
        }, e.uiOptionHideOnly = function(i, a) {
            if ("string" == typeof i && (i = [i]), !(i.length < 1)) {
                var r = a !== t ? "#panel-" + a : ".panel-ability";
                $(r + " .ability-select optgroup, " + r + " .ability-select option").show();
                var n = !0,
                    l = !1,
                    o = t;
                try {
                    for (var s, c = i[Symbol.iterator](); !(n = (s = c.next()).done); n = !0) {
                        var u = s.value;
                        e.uiOptgroupShow(u, a), e.uiOptionShow(u, a)
                    }
                } catch (f) {
                    l = !0, o = f
                } finally {
                    try {
                        !n && c["return"] && c["return"]()
                    } finally {
                        if (l) throw o
                    }
                }
                $(r + " .ability-select option")[0].style.display = "block"
            }
        }, e.uiOptgroupHide = function(e, i) {
            if (!(e.length < 1)) {
                var a = i !== t ? "#panel-" + i : ".panel-ability",
                    r = $(a + ' .ability-select option[value="' + e + '"]').closest("optgroup");
                0 !== r.length && (r[0].style.display = "none")
            }
        }, e.uiOptgroupShow = function(e, i) {
            if (!(e.length < 1)) {
                var a = i !== t ? "#panel-" + i : ".panel-ability",
                    r = $(a + ' .ability-select option[value="' + e + '"]').closest("optgroup");
                0 !== r.length && (r[0].style.display = "block")
            }
        }, e.uiOptionShowAll = function() {
            $(".panel-ability .ability-select optgroup").show(), $(".panel-ability .ability-select option").show()
        }, e.uiOptionCleanup = function() {
            $(".ability-select optgroup").filter(function() {
                var e = $(this).find("option"),
                    t = e.filter(function() {
                        return "none" === $(this).css("display")
                    }).length;
                return e.length === t
            }).hide()
        }, e.uiPanelHide = function(e) {
            $("#panel-" + e).hide()
        }, e.uiPanelShow = function(e) {
            $("#panel-" + e).show()
        }, e.uiQuicksummaryBuild = function() {
            var t = {
                name: e.activeProfile.title,
                strength: e.activeProfile.attributes.strength.value,
                toughness: e.activeProfile.attributes.toughness.value,
                agility: e.activeProfile.attributes.agility.value,
                leadership: e.activeProfile.attributes.leadership.value,
                intelligence: e.activeProfile.attributes.intelligence.value,
                alertness: e.activeProfile.attributes.alertness.value,
                weapon_skill: e.activeProfile.attributes.weapon_skill.value,
                ballistic_skill: e.activeProfile.attributes.ballistic_skill.value,
                accuracy: e.activeProfile.attributes.accuracy.value
            };
            t.skills = e.activeProfile.skills.map(function(t) {
                return e.skills[t.type][t.name].name + " " + t.version.charAt(0).toUpperCase() + t.version.slice(1)
            }), t.skills = t.skills.join(", "), e.activeProfile.spells.length > 0 && (t.spells = e.activeProfile.spells.map(function(t) {
                return e.spells[t.name].name + " " + t.version.charAt(0).toUpperCase() + t.version.slice(1)
            }), t.spells = t.spells.join(", ")), e.activeProfile.mutations.length > 0 && (t.mutations = e.activeProfile.mutations.map(function(t) {
                return e.mutations[t.name].name
            }), t.mutations = t.mutations.join(", ")), e.activeProfile.injuries.length > 0 && (t.injuries = e.activeProfile.injuries.map(function(t) {
                return e.injuries[t].name
            }), t.injuries = t.injuries.join(", ")), e.activeProfile.books.length > 0 && (t.books = e.activeProfile.books.map(function(t) {
                return e.books[t].name
            }), t.books = t.books.join(", "));
            var i = [];
            for (var a in e.activeProfile.equipment)
                if (e.activeProfile.equipment[a] !== !1) {
                    var r = e.equipment.weapon[e.activeProfile.equipment[a].name] || e.equipment.armour[e.activeProfile.equipment[a].name];
                    i.push(r.name)
                }
            i.length && (t.equipment = i.join(", "));
            var n = e.templates.quicksummary(t);
            return n
        }, e.loadData = function() {
            $.getJSON("data/data.json", function(t) {
                e.attributes = Object.create(t.attributes), e.skills = Object.create(t.skills), e.spells = Object.create(t.spells), e.mutations = Object.create(t.mutations), e.injuries = Object.create(t.injuries), e.books = Object.create(t.books), e.equipment = Object.create(t.equipment), e.profiles = Object.create(t.profiles), e.resistances = Object.create(t.resistances), e.initiatives = Object.create(t.initiatives), e.points = Object.create(t.points), e.types = Object.create(t.types), $(document).trigger("MCotDPlanner_DataLoaded")
            })
        }, e.parseTemplatesHandlebars = function() {
            var t = $("#template-panel-profile").html();
            e.templates.profile = Handlebars.compile(t), t = $("#template-skill-row").html(), e.templates.skill = Handlebars.compile(t), t = $("#template-alert").html(), e.templates.notice = Handlebars.compile(t), t = $("#template-quicksummary").html(), e.templates.quicksummary = Handlebars.compile(t)
        }, e.parseTemplatesMustache = function() {
            e.templates.spell = $("#template-spell-row").html(), Mustache.parse(e.templates.spell), e.templates.skill.active = $("#template-skill-row-active").html(), Mustache.parse(e.templates.skill.active), e.templates.skill.passive = $("#template-skill-row-passive").html(), Mustache.parse(e.templates.skill.passive), e.templates.alert = $("#template-alert").html(), Mustache.parse(e.templates.alert), e.templates.profile = $("#template-panel-profile").html(), Mustache.parse(e.templates.profile)
        }, e.init = function() {
            e.views.loading = $("#view-loading"), e.views.profileicons = $("#view-profileicons"), e.views.profile = $("#view-profile"), e.panels.skills = $("#panel-skills"), e.panels.spells = $("#panel-spells"), e.panels.mutations = $("#panel-mutations"), e.loadData(), e.parseTemplatesHandlebars(), e.uiHandlerAttributes(), e.uiHandlerSkills(), e.uiHandlerSpells(), e.uiHandlerMutations(), e.uiHandlerInjuries(), e.uiHandlerBooks(), e.uiHandlerEquipment(), e.uiHandlerProfile(), e.uiHandlerDataLoaded(), e.uiHandlerButtonQuicklink(), e.uiHandlerButtonQuicksummary()
        }
    }(window.MCotDPlanner = window.MCotDPlanner || {});
