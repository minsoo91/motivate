class PositiveQuote < ActiveRecord::Base
	validates :quote, :source, presence: true
end