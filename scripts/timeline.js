// Dark blue shades (from light to dark)
// #e5e8f4 -
// #b3b9de -
// #808bc8 - 
// #4d5cb2 - 

// light blue shades
// #b2dadf -
// #357981 -
// #20494d -

const toolDic = {
	'Python': {
		'color': '#313B72',
		'font': '#F7ECE1'
	},
	'R': {
		'color': '#b2dadf',
		'font': '#311E10'
	},
	'OpenCV': {
		'color': '#e5e8f4',
		'font': '#311E10'
	},
	'PyQT5': {
		'color': '#b3b9de',
		'font': '#311E10'
	},
	'ROS': {
		'color': '#808bc8',
		'font': '#311E10'
	},
	'SQL': {
		'color': '#4d5cb2',
		'font': '#F7ECE1'
	},
	'JavaScript': {
		'color': '#357981',
		'font': '#F7ECE1'
	},
	'HTML': {
		'color': '#20494d',
		'font': '#F7ECE1'
	}
};

var tools = document.getElementsByClassName('tool');

for (var [tool, values] of Object.entries(toolDic)) {
	for (var i = 0; i < tools.length; i++) {
		var text = tools[i].textContent;
		var toolUpper = tool;
		if (text.includes(toolUpper)) {
			tools[i].style['background-color'] = values['color'];
			tools[i].style['color'] = values['font'];
		}
	}

}

let userScrolling = true;
let timelineNav = document.querySelectorAll(".timeline-nav ul li");

window.addEventListener("wheel", () => userScrolling = true);
window.addEventListener("touchmove", () => userScrolling = true);
window.addEventListener("mousedown", () => userScrolling = true);

// for clickable event
timelineNav.forEach(v => {
	v.onclick = (() => {
		userScrolling = false;
		timelineNav.forEach(j=> j.classList.remove('active'));
		v.classList.add('active');
	 });
});

var above = [];

window.onscroll = (()=> {
	let milestones = document.querySelectorAll(".wrapper .milestone");
	if (userScrolling) {
		milestones.forEach((v,i)=> {
			let rect = v.getBoundingClientRect().y;
			if (rect <= window.innerHeight/2) {
				above.push(i);
			}
		});

		if (above.length > 0) {
			timelineNav.forEach((v,k) => {
				if (k != above.at(-1)) {
					v.classList.remove('active');
				}
			});
	
			if (timelineNav[above.at(-1)].classList.contains('active') == false) {
				timelineNav[above.at(-1)].classList.add('active');
			}

		} else {
			timelineNav.forEach((v,k) => {
				v.classList.remove('active');
			});
		}

	}

});
// const observer = new IntersectionObserver(entries => {
// 	entries.forEach(entry => {
// 	  const exp = entry.target;
  
// 	  if (exp.isIntersecting) {
// 		exp.classList.add('experience-animation');
// 		return; // if we added the class, exit the function
// 	  }
  
// 	  // We're not intersecting, so remove the class!
// 	  exp.classList.remove('experience-animation');
// 	});
//   });

// document.querySelectorAll('.experience').forEach(div => {
// 	observer.observe(div);
// });

// $(() => {
// 	let stickyTop = 0,
// 	scrollTarget = false;
  
// 	let timeline = $('.timeline__nav'),
// 	items = $('li', timeline),
// 	milestones = $('.timeline__section .milestone'),
// 	offsetTop = parseInt(timeline.css('top'));
  
// 	const TIMELINE_VALUES = {
// 	  start: 190,
// 	  step: 30 };
  
  
// 	$(window).resize(function () {
// 	  timeline.removeClass('fixed');
  
// 	  stickyTop = timeline.offset().top - offsetTop;
  
// 	  $(window).trigger('scroll');
// 	}).trigger('resize');
  
// 	$(window).scroll(function () {
// 	  if ($(window).scrollTop() > stickyTop) {
// 		timeline.addClass('fixed');
// 	  } else {
// 		timeline.removeClass('fixed');
// 	  }
// 	}).trigger('scroll');
  
// 	items.find('span').click(function () {
// 	  let li = $(this).parent(),
// 	  index = li.index(),
// 	  milestone = milestones.eq(index);
  
// 	  if (!li.hasClass('active') && milestone.length) {
// 		scrollTarget = index;
  
// 		let scrollTargetTop = milestone.offset().top - 80;
  
// 		$('html, body').animate({ scrollTop: scrollTargetTop }, {
// 		  duration: 400,
// 		  complete: function complete() {
// 			scrollTarget = false;
// 		  } });
  
// 	  }
// 	});
  
// 	$(window).scroll(function () {
// 	  let viewLine = $(window).scrollTop() + $(window).height() / 3,
// 	  active = -1;
  
// 	  if (scrollTarget === false) {
// 		milestones.each(function () {
// 		  if ($(this).offset().top - viewLine > 0) {
// 			return false;
// 		  }
  
// 		  active++;
// 		});
// 	  } else {
// 		active = scrollTarget;
// 	  }
  
// 	  timeline.css('top', -1 * active * TIMELINE_VALUES.step + TIMELINE_VALUES.start + 'px');
  
// 	  items.filter('.active').removeClass('active');
  
// 	  items.eq(active != -1 ? active : 0).addClass('active');
// 	}).trigger('scroll');
//   });