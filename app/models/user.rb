class User < ApplicationRecord
	validates(:name, {
		presence: true
	})

	validates(:email, {
		presence: true
	})

	def is_password?(password)
		self.password == password
	end

	def password
		@password ||= BCrypt::Password.new(self.password_digest)
	end

	def password=(new_password)
		@password = BCrypt::Password.create(new_password)
		self.password_digest = @password
	end

	def self.find_by_credentials(email, password)
		user = User.find_by(:email => email)
		user && user.is_password?(password) ? user : nil
	end

	has_many :venues

end
