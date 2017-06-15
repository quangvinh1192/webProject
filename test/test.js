var assert = require('assert');
describe('First_install', function() {
  describe('test_assert', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

var SMS = require('../routes/webapp/business/sms.js');
var validation = require('../routes/webapp/business/validation.js');
var EMAIL = require('../routes/webapp/business/email.js');
var assert = require('assert');
var req = {
    body:{
    inputName:"test",
    inputDate:"Monday",
    inputTime:"20",
    inputPhone:"+aaa",
	inputEmail:"cse112team8@gmail.com"
}
};
var res = "test";
// sms(req, res);

var assert = require('assert');
describe('sms test', function() {
  describe('failing to send an string aaa', function() {
    it('wrong number', function() {
      assert.equal(SMS.sms(req, res), console.log("The 'To' number +aaa is not a valid phone number."));
    });
  });
  describe('failing to send an string aaa', function() {
    it('invalid number', function() {
        req.body.inputPhone ="+141547714462"
        assert.equal(SMS.sms(req, res), console.log("The 'To' number +141547714462 is not a valid phone number."));
    });
  });

  describe('failing to send a wrong number', function() {
      req.body.inputPhone ="123234567"
      it('send wrong number in to', function() {
      assert.equal(SMS.sms(req, res), console.log("The 'To' number +123234567 is not a valid phone number."));
    });
  });
  describe('failing to send an empty number', function() {
    it('wrong number', function() {
      assert.equal(SMS.sms(req, res), console.log("The 'To' number +1 is not a valid phone number."));
    });
  });
  describe('sending succesfully without body', function() {
      req.body.inputPhone ="+14154771446";
      res="";
    it('right number without message', function() {
      assert.equal(SMS.sms(req, res), console.log(""));
    });
  });
  describe('sending succesfully without date', function() {
      req.body.inputPhone ="+14154771446"
      req.body.inputDate ="";
    it('sending succesfully without date', function() {
      assert.equal(SMS.sms(req, res), console.log(""));
    });
  });
  describe('sending succesfully without inputTime', function() {
      req.body.inputPhone ="+14154771446"
      req.body.inputTime ="";
    it('sending succesfully without inputTime', function() {
      assert.equal(SMS.sms(req, res), console.log(""));
    });
  });
  describe('sending succesfully without inputName', function() {
      req.body.inputPhone ="+14154771446"
      req.body.inputName ="";
    it('sending succesfully without inputName', function() {
      assert.equal(SMS.sms(req, res), console.log(""));
    });
  });
  describe('sending succesfully', function() {
      req.body.inputPhone ="+14154771446"
    it('right number', function() {
      assert.equal(SMS.sms(req, res), console.log(""));
    });
  });
  describe('sending outside us number', function() {
      req.body.inputPhone ="+841687854687"
      it('sending message succesfully using ', function() {
      assert.equal(SMS.sms(req, res), console.log(""));
    });
  });
  describe('test valid name isValidName: who', function() {
      it('test valid name isValidName: who', function() {
      assert.equal(validation.isValidName("who"), true);
    });
  });
  describe('test valid name isValidName: apt with dr', function() {
      it('test isValidName: apt with dr', function() {
      assert.equal(validation.isValidName("apt with dr"), true);
    });
  });
  describe('test valid name isValidName: ', function() {
      it('test isValidName: valid name who', function() {
      assert.equal(validation.isValidName("apt with dr.j"), false);
    });
  });
  describe('test valid name isValidName: 87*fasfd', function() {
      it('test isValidName: valid name 87*fasfd', function() {
      assert.equal(validation.isValidName("87*fasfd"), false);
    });
  });
  describe('test invalid name isValidName: remind time', function() {
      it('test valid name isValidName: remind time', function() {
      assert.equal(validation.isValidName("remind time"), true);
    });
  });
  describe('test invalid name isValidName: apt 9', function() {
      it('test invalid name isValidName: apt 9', function() {
      assert.equal(validation.isValidName("apt 9"), false);
    });
  });
  describe('test invalid name isValidName: ', function() {
      it('test invalid name isValidName: ', function() {
      assert.equal(validation.isValidName(""), false);
    });
  });
  describe('test phone validation: 4088888888', function() {
      it('test phone validation: 4088888888', function() {
      assert.equal(validation.phone("4088888888"), true);
    });
  });
  describe('test invalid phone: 408888888', function() {
      it('test invalid phone: 408888888', function() {
      assert.equal(validation.phone("408888888"), false);
    });
  });
  describe('test invalid phone: 4088aaa88888', function() {
      it('test invalid phone: 4088aaa88888', function() {
      assert.equal(validation.phone("4088aaa88888"), false);
    });
  });
  describe('test valid phone #: +18888888888', function() {
      it('test invalid phone #: +18888888888', function() {
      assert.equal(validation.phone("+18888888888"), false);
    });
  });
  describe('test invalid phone: +14088?88888', function() {
      it('test invalid phone: +14088?88888', function() {
      assert.equal(validation.phone("+14088?888888"), false);
    });
  });
  describe('test sending email: ', function() {
	  it('test invalid phone: ', function() {
	  assert.equal(EMAIL.email(req, "testing"), undefined);
	});
  });
  describe('test sending email: cse112team8@gmail.com', function() {
	it('test sending email: cse112team8@gmail.com', function() {
	assert.equal(EMAIL.email(req, "testing cse112team8@gmail.com"), undefined);
  	});
  });
  describe('test sending email: kukhunga2@gmail.com', function() {
	it('test sending email: kukhunga2@gmail.com', function() {
		req.body.inputEmail = 'kukhunga2@gmail.com'
		assert.equal(EMAIL.email(req, "testing cse112team8@gmail.com"), undefined);
  	});
  });
  describe('test sending 2 emails: kukhunga2@gmail.com and testing cse112team8@gmail.com', function() {
	it('test sending email: kukhunga2@gmail.com', function() {
		req.body.inputEmail = 'kukhunga2@gmail.com, testing cse112team8@gmail.com'
		assert.equal(EMAIL.email(req, "testing cse112team8@gmail.com"), undefined);
  	});
  });
  describe('test sending email: empty address', function() {
	it('test sending email: empty address', function() {
		req.body.inputEmail = ''
		assert.equal(EMAIL.email(req, "testing cse112team8@gmail.com"), false);
  	});
  });
  describe('test sending email: empty text', function() {
	it('test sending email: empty text', function() {
		req.body.inputEmail = 'cse112team8@gmail.com'
		assert.equal(EMAIL.email(req, ''), false);
  	});
  });
  describe('test sending email: only email', function() {
	it('test sending email: only email', function() {
		req.body.inputEmail = 'cse112team8@gmail.com'
		assert.equal(EMAIL.email(req, ''), false);
  	});
  });
  describe('test sending email: empty address and text', function() {
	it('test sending email: empty address and text', function() {
		req.body.inputEmail = ''
		assert.equal(EMAIL.email(req, ''), false);
  	});
  });
  describe('test date validation: 12-29-1993', function() {
	it('test date validation: 12-29-1993', function() {
		var date1 = new Date("12-29-1993");
		assert.equal(validation.date(date1), false);
  	});
  });
  describe('test date validation: 12-29-2019', function() {
	it('test date validation: 12-29-2019', function() {
		var date1 = new Date("12-29-2019");
		assert.equal(validation.date(date1), true);
  	});
  });
  describe('test date validation: today', function() {
	it('test date validation: today', function() {
		var date1 = new Date();
		assert.equal(validation.date(date1), true);
  	});
  });
  describe('test date validation: invalid date', function() {
    it('test date validation: today', function() {
        var date3 = new Date("happy");
        assert.equal(validation.date(date3), false);
    });
  });
  describe('test date validation: invalid date', function() {
    it('test date validation: today', function() {
        var date3 = new Date(22-11-1131);
        assert.equal(validation.date(date3), false);
    });
  });
  describe('test time validation: valid time', function() {
    it('test date validation: time', function() {
        assert.equal(validation.time("12:00"), true);
    });
  });
  describe('test time validation: invalid time', function() {
    it('test date validation: 1:00', function() {
        assert.equal(validation.time("1:00"), false);
    });
  });
  describe('test time validation: invalid time', function() {
    it('test date validation: 13:00', function() {
        assert.equal(validation.time("13:00"), true);
    });
  });
  describe('test time validation: invalid time', function() {
    it('test date validation: 25:00', function() {
        assert.equal(validation.time("25:00"), false);
    });
  });
  describe('test time validation: invalid time', function() {
    it('test date validation: 12:99', function() {
        assert.equal(validation.time("12:99"), false);
    });
  });
  describe('test time validation: invalid time', function() {
    it('test date validation: a:20', function() {
        assert.equal(validation.time("a:20"), false);
    });
  });
});
;
